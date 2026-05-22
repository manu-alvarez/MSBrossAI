import { getDb } from './base';
import type { UserProfile, Role } from '@/types';

export const AuthService = {
  /**
   * Sign in with email/password via Supabase Auth.
   */
  async login(email: string, password: string): Promise<UserProfile> {
    const db = getDb();
    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    if (!data.user) throw new Error('Authentication failed');

    // Try to get user metadata for role
    const role = (data.user.user_metadata?.role as Role) ?? 'commercial';

    return {
      id: data.user.id,
      email: data.user.email ?? email,
      role,
      name: data.user.user_metadata?.name as string ?? email.split('@')[0],
    };
  },

  /**
   * Sign out.
   */
  async logout(): Promise<void> {
    const db = getDb();
    await db.auth.signOut();
  },

  /**
   * Get the current session, or throw.
   */
  async getSession(): Promise<UserProfile | null> {
    const db = getDb();
    const { data, error } = await db.auth.getSession();
    if (error || !data.session) return null;

    const user = data.session.user;
    const role = (user.user_metadata?.role as Role) ?? 'commercial';

    return {
      id: user.id,
      email: user.email ?? '',
      role,
      name: user.user_metadata?.name as string ?? user.email?.split('@')[0] ?? 'User',
    };
  },
};
