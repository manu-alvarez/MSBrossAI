import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useConfig } from '../src/useConfig';

// Test suite for config hook functionality
describe('useConfig', () => {

  // Test case: Verify hook initialization
  it('should initialize with default config', () => {
    const { result } = renderHook(() => useConfig());
    expect(result.current.config).toEqual({
      theme: 'light',
      language: 'en',
      notifications: true,
    });
  });

  // Test case: Verify updating config
  it('should update config', () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.updateConfig({ theme: 'dark' });
    });
    expect(result.current.config.theme).toBe('dark');
  });

  // Test case: Verify updating config with invalid values
  it('should throw an error for invalid config values', () => {
    const { result } = renderHook(() => useConfig());
    expect(() => {
      act(() => {
        result.current.updateConfig({ theme: 'invalid' });
      });
    }).toThrow();
  });

  // Test case: Verify resetting config
  it('should reset config to defaults', () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.updateConfig({ theme: 'dark' });
      result.current.resetConfig();
    });
    expect(result.current.config).toEqual({
      theme: 'light',
      language: 'en',
      notifications: true,
    });
  });

  // Test case: Verify handling of multiple updates
  it('should handle multiple updates', () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.updateConfig({ theme: 'dark' });
      result.current.updateConfig({ language: 'es' });
    });
    expect(result.current.config.theme).toBe('dark');
    expect(result.current.config.language).toBe('es');
  });

  // Test case: Verify handling of partial updates
  it('should handle partial updates', () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.updateConfig({ theme: 'dark' });
    });
    expect(result.current.config.theme).toBe('dark');
    expect(result.current.config.language).toBe('en');
  });

  // Test case: Verify handling of invalid updates
  it('should handle invalid updates gracefully', () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.updateConfig({ invalidKey: 'value' });
    });
    expect(result.current.config).toEqual({
      theme: 'light',
      language: 'en',
      notifications: true,
    });
  });

});