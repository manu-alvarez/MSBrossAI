import { describe, it, expect, beforeEach } from 'vitest';
import { SearchEngine } from '../src/search';

// Test suite for search functionality
describe('SearchEngine', () => {
  let searchEngine;

  beforeEach(() => {
    // Initialize the search engine before each test
    searchEngine = new SearchEngine();
  });

  // Test case: Verify engine initialization
  it('should initialize the engine', () => {
    expect(searchEngine).toBeDefined();
  });

  // Test case: Verify performing a search
  it('should perform a search', async () => {
    const results = await searchEngine.search('test query');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify performing a search with invalid query
  it('should throw an error for invalid query', async () => {
    await expect(searchEngine.search('')).rejects.toThrow();
  });

  // Test case: Verify handling of complex searches
  it('should handle complex searches', async () => {
    const results = await searchEngine.search('complex query with multiple terms');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of ambiguous searches
  it('should handle ambiguous searches', async () => {
    const results = await searchEngine.search('ambiguous query');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches in different languages
  it('should handle searches in different languages', async () => {
    const resultsEn = await searchEngine.search('test query');
    expect(resultsEn).toBeDefined();
    expect(resultsEn.length).toBeGreaterThan(0);

    const resultsEs = await searchEngine.search('consulta de prueba');
    expect(resultsEs).toBeDefined();
    expect(resultsEs.length).toBeGreaterThan(0);

    const resultsFr = await searchEngine.search('requête de test');
    expect(resultsFr).toBeDefined();
    expect(resultsFr.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches with special characters
  it('should handle searches with special characters', async () => {
    const results = await searchEngine.search('test query with special characters: !@#$%^&*()');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches with filters
  it('should handle searches with filters', async () => {
    const results = await searchEngine.search('test query', { category: 'technology' });
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches with invalid filters
  it('should throw an error for invalid filters', async () => {
    await expect(searchEngine.search('test query', { invalidFilter: 'value' })).rejects.toThrow();
  });

});