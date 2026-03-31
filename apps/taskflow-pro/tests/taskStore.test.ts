import { describe, it, expect, beforeEach } from 'vitest';
import { useTaskStore } from '../src/taskStore';

// Test suite for Zustand store functionality
describe('taskStore', () => {
  let taskStore;

  beforeEach(() => {
    // Reset the store before each test
    taskStore = useTaskStore.getState();
    taskStore.reset();
  });

  // Test case: Verify store initialization
  it('should initialize with empty tasks', () => {
    expect(taskStore.tasks).toEqual([]);
  });

  // Test case: Verify adding a task
  it('should add a task', () => {
    taskStore.addTask({ id: 1, title: 'Test Task', description: 'Test Description' });
    expect(taskStore.tasks.length).toBe(1);
    expect(taskStore.tasks[0].title).toBe('Test Task');
  });

  // Test case: Verify updating a task
  it('should update a task', () => {
    taskStore.addTask({ id: 1, title: 'Test Task', description: 'Test Description' });
    taskStore.updateTask(1, { title: 'Updated Task' });
    expect(taskStore.tasks[0].title).toBe('Updated Task');
  });

  // Test case: Verify deleting a task
  it('should delete a task', () => {
    taskStore.addTask({ id: 1, title: 'Test Task', description: 'Test Description' });
    taskStore.deleteTask(1);
    expect(taskStore.tasks.length).toBe(0);
  });

  // Test case: Verify toggling task completion
  it('should toggle task completion', () => {
    taskStore.addTask({ id: 1, title: 'Test Task', description: 'Test Description', completed: false });
    taskStore.toggleTaskCompletion(1);
    expect(taskStore.tasks[0].completed).toBe(true);
  });

  // Test case: Verify filtering tasks
  it('should filter tasks', () => {
    taskStore.addTask({ id: 1, title: 'Test Task 1', description: 'Test Description', completed: false });
    taskStore.addTask({ id: 2, title: 'Test Task 2', description: 'Test Description', completed: true });
    const filteredTasks = taskStore.filterTasks('completed');
    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].id).toBe(2);
  });

  // Test case: Verify sorting tasks
  it('should sort tasks', () => {
    taskStore.addTask({ id: 2, title: 'Test Task 2', description: 'Test Description', completed: false });
    taskStore.addTask({ id: 1, title: 'Test Task 1', description: 'Test Description', completed: false });
    taskStore.sortTasks('id');
    expect(taskStore.tasks[0].id).toBe(1);
    expect(taskStore.tasks[1].id).toBe(2);
  });

  // Test case: Verify resetting the store
  it('should reset the store', () => {
    taskStore.addTask({ id: 1, title: 'Test Task', description: 'Test Description' });
    taskStore.reset();
    expect(taskStore.tasks.length).toBe(0);
  });

});