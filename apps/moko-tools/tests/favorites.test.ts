import { describe, it, expect, beforeEach } from 'vitest';
import { FavoritesManager } from '../src/favorites';

// Test suite for favorites functionality
describe('FavoritesManager', () => {
  let favoritesManager;

  beforeEach(() => {
    // Initialize the favorites manager before each test
    favoritesManager = new FavoritesManager();
  });

  // Test case: Verify manager initialization
  it('should initialize the manager', () => {
    expect(favoritesManager).toBeDefined();
  });

  // Test case: Verify adding a favorite
  it('should add a favorite', () => {
    favoritesManager.addFavorite('test item');
    expect(favoritesManager.getFavorites()).toContain('test item');
  });

  // Test case: Verify adding a duplicate favorite
  it('should not add duplicate favorites', () => {
    favoritesManager.addFavorite('test item');
    favoritesManager.addFavorite('test item');
    expect(favoritesManager.getFavorites().length).toBe(1);
  });

  // Test case: Verify removing a favorite
  it('should remove a favorite', () => {
    favoritesManager.addFavorite('test item');
    favoritesManager.removeFavorite('test item');
    expect(favoritesManager.getFavorites()).not.toContain('test item');
  });

  // Test case: Verify removing a non-existent favorite
  it('should handle removing non-existent favorites', () => {
    favoritesManager.removeFavorite('non-existent item');
    expect(favoritesManager.getFavorites().length).toBe(0);
  });

  // Test case: Verify getting all favorites
  it('should get all favorites', () => {
    favoritesManager.addFavorite('item 1');
    favoritesManager.addFavorite('item 2');
    expect(favoritesManager.getFavorites()).toEqual(['item 1', 'item 2']);
  });

  // Test case: Verify clearing all favorites
  it('should clear all favorites', () => {
    favoritesManager.addFavorite('item 1');
    favoritesManager.addFavorite('item 2');
    favoritesManager.clearFavorites();
    expect(favoritesManager.getFavorites().length).toBe(0);
  });

  // Test case: Verify handling of multiple favorites
  it('should handle multiple favorites', () => {
    favoritesManager.addFavorite('item 1');
    favoritesManager.addFavorite('item 2');
    favoritesManager.addFavorite('item 3');
    expect(favoritesManager.getFavorites().length).toBe(3);
  });

  // Test case: Verify handling of favorites with special characters
  it('should handle favorites with special characters', () => {
    favoritesManager.addFavorite('item with special characters: !@#$%^&*()');
    expect(favoritesManager.getFavorites()).toContain('item with special characters: !@#$%^&*()');
  });

});