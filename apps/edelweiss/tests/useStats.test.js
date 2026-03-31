import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useStats } from '../src/useStats';

// Test suite for stats hook functionality
describe('useStats', () => {

  // Test case: Verify hook initialization
  it('should initialize with empty stats', () => {
    const { result } = renderHook(() => useStats());
    expect(result.current.stats).toEqual({
      total: 0,
      completed: 0,
      pending: 0,
      overdue: 0,
    });
  });

  // Test case: Verify updating stats
  it('should update stats', () => {
    const { result } = renderHook(() => useStats());
    act(() => {
      result.current.updateStats({
        total: 10,
        completed: 5,
        pending: 3,
        overdue: 2,
      });
    });
    expect(result.current.stats).toEqual({
      total: 10,
      completed: 5,
      pending: 3,
      overdue: 2,
    });
  });

  // Test case: Verify updating stats with invalid values
  it('should throw an error for invalid stats values', () => {
    const { result } = renderHook(() => useStats());
    expect(() => {
      act(() => {
        result.current.updateStats({
          total: -1,
          completed: 5,
          pending: 3,
          overdue: 2,
        });
      });
    }).toThrow();
  });

  // Test case: Verify resetting stats
  it('should reset stats to defaults', () => {
    const { result } = renderHook(() => useStats());
    act(() => {
      result.current.updateStats({
        total: 10,
        completed: 5,
        pending: 3,
        overdue: 2,
      });
      result.current.resetStats();
    });
    expect(result.current.stats).toEqual({
      total: 0,
      completed: 0,
      pending: 0,
      overdue: 0,
    });
  });

  // Test case: Verify handling of multiple updates
  it('should handle multiple updates', () => {
    const { result } = renderHook(() => useStats());
    act(() => {
      result.current.updateStats({
        total: 10,
        completed: 5,
        pending: 3,
        overdue: 2,
      });
      result.current.updateStats({
        total: 20,
        completed: 10,
        pending: 5,
        overdue: 5,
      });
    });
    expect(result.current.stats).toEqual({
      total: 20,
      completed: 10,
      pending: 5,
      overdue: 5,
    });
  });

  // Test case: Verify handling of partial updates
  it('should handle partial updates', () => {
    const { result } = renderHook(() => useStats());
    act(() => {
      result.current.updateStats({
        total: 10,
        completed: 5,
      });
    });
    expect(result.current.stats).toEqual({
      total: 10,
      completed: 5,
      pending: 0,
      overdue: 0,
    });
  });

  // Test case: Verify handling of invalid updates
  it('should handle invalid updates gracefully', () => {
    const { result } = renderHook(() => useStats());
    act(() => {
      result.current.updateStats({
        invalidKey: 'value',
      });
    });
    expect(result.current.stats).toEqual({
      total: 0,
      completed: 0,
      pending: 0,
      overdue: 0,
    });
  });

});