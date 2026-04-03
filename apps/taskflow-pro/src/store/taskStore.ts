import { create } from 'zustand';
import { WhatsAppService } from '../services/whatsappService';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  reminderTime?: string;
  reminderSent?: boolean;
  order: number;
}

export interface AppSettings {
  soundEnabled: boolean;
  whatsappEnabled: boolean;
  whatsappPhone1: string;
  whatsappApiKey1: string;
  whatsappPhone2: string;
  whatsappApiKey2: string;
}

interface TaskStore {
  tasks: Task[];
  categories: Category[];
  settings: AppSettings;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'order' | 'reminderSent'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
  setTasks: (tasks: Task[]) => void;
  updateSettings: (updates: Partial<AppSettings>) => void;
  reorderTasks: (startIndex: number, endIndex: number) => void;
  exportTasks: () => string;
  importTasks: (json: string) => void;
  searchTasks: (query: string) => Task[];
  addCategory: (category: Omit<Category, "id">) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  checkReminders: () => void;
}

const defaultCategories: Category[] = [
  { id: 'all', name: 'Todas', color: '#00F5FF', icon: '📋' },
  { id: 'edelweiss_care', name: 'Edelweiss', color: '#FF00E4', icon: '👶' },
  { id: 'work', name: 'Trabajo', color: '#FFB800', icon: '💼' },
];

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      categories: defaultCategories,
      settings: {
        soundEnabled: true,
        whatsappEnabled: false,
        whatsappPhone1: '',
        whatsappApiKey1: '',
        whatsappPhone2: '',
        whatsappApiKey2: '',
      },
      
      addTask: (taskData) => set((state) => {
        const newTask: Task = {
          ...taskData,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          reminderSent: false,
          order: state.tasks.length,
        };
        
        // WhatsApp notification on task creation
        if (state.settings.whatsappEnabled) {
          WhatsAppService.onTaskCreated(newTask.title);
        }
        
        return { tasks: [newTask, ...state.tasks] };
      }),

      updateTask: (id, updates) => set((state) => {
        const oldTask = state.tasks.find(t => t.id === id);
        const newTasks = state.tasks.map((task) => 
          task.id === id 
            ? { ...task, ...updates, updatedAt: new Date().toISOString() } 
            : task
        );
        
        // WhatsApp on task completion
        if (updates.status === 'completed' && oldTask?.status !== 'completed' && state.settings.whatsappEnabled) {
          WhatsAppService.onTaskCompleted(oldTask!.title);
        }
        
        return { tasks: newTasks };
      }),

      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      })),

      clearTasks: () => set({ tasks: [] }),
      setTasks: (tasks) => set({ tasks }),

      updateSettings: (updates) => set((state) => ({
        settings: { ...state.settings, ...updates }
      })),

      reorderTasks: (startIndex, endIndex) => set((state) => {
        const result = Array.from(state.tasks);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return { tasks: result.map((task, index) => ({ ...task, order: index })) };
      }),

      exportTasks: () => {
        const state = get();
        return JSON.stringify({ tasks: state.tasks, categories: state.categories }, null, 2);
      },

      importTasks: (json: string) => {
        try {
          const data = JSON.parse(json);
          if (data.tasks && Array.isArray(data.tasks)) {
            set({ tasks: data.tasks });
          }
          if (data.categories && Array.isArray(data.categories)) {
            set({ categories: data.categories });
          }
        } catch (e) {
          console.error('Failed to import tasks:', e);
        }
      },

      searchTasks: (query: string) => {
        const state = get();
        if (!query.trim()) return state.tasks;
        const lowerQuery = query.toLowerCase();
        return state.tasks.filter(task => 
          task.title.toLowerCase().includes(lowerQuery) ||
          task.description.toLowerCase().includes(lowerQuery) ||
          state.categories.find(c => c.id === task.categoryId)?.name.toLowerCase().includes(lowerQuery)
        );
      },

      addCategory: (cat) => set((state) => ({
        categories: [...state.categories, { ...cat, id: crypto.randomUUID() }]
      })),

      updateCategory: (id, updates) => set((state) => ({
        categories: state.categories.map(c => c.id === id ? { ...c, ...updates } : c)
      })),

      deleteCategory: (id) => set((state) => ({
        categories: state.categories.filter(c => c.id !== id)
      })),

      // Check reminders every minute and send CallMeBot alerts at the exact reminder time
      checkReminders: () => {
        const state = get();
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        state.tasks.forEach(task => {
          if (task.reminderTime && !task.reminderSent && task.status !== 'completed') {
            // Check if it's time for the reminder (within the current minute)
            if (task.reminderTime === currentTime) {
              // Send WhatsApp alert via CallMeBot
              if (state.settings.whatsappEnabled) {
                WhatsAppService.onTaskDue(task.title, task.reminderTime);
              }
              
              // Also show browser notification
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`⏰ Recordatorio: ${task.title}`, {
                  body: `Es hora de cumplir esta tarea. Prioridad: ${task.priority}`,
                  icon: '/taskflow/pwa-192x192.png',
                });
              }
              
              // Play sound if enabled
              if (state.settings.soundEnabled) {
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
                audio.play().catch(() => {});
              }
              
              // Mark reminder as sent
              set((s) => ({
                tasks: s.tasks.map(t => 
                  t.id === task.id ? { ...t, reminderSent: true } : t
                )
              }));
            }
          }
        });
      },
    }),
    {
      name: 'taskflowpro-v2-storage',
      storage: createJSONStorage(() => localStorage),
      version: 2,
      migrate: (persisted: any, version: number) => {
        if (version < 2) {
          return {
            tasks: persisted.state?.tasks || [],
            categories: persisted.state?.categories || defaultCategories,
            settings: persisted.state?.settings || {
              soundEnabled: true,
              whatsappEnabled: false,
              whatsappPhone1: '',
              whatsappApiKey1: '',
              whatsappPhone2: '',
              whatsappApiKey2: '',
            },
          };
        }
        return persisted.state;
      },
    }
  )
);
