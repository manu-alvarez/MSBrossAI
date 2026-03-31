import { describe, it, expect, beforeEach } from 'vitest';
import { TavilySearch } from '../src/tavily';

// Test suite for Tavily search functionality
describe('TavilySearch', () => {
  let tavilySearch;

  beforeEach(() => {
    // Initialize the Tavily search before each test
    tavilySearch = new TavilySearch();
  });

  // Test case: Verify search initialization
  it('should initialize the search', () => {
    expect(tavilySearch).toBeDefined();
  });

  // Test case: Verify performing a search
  it('should perform a search', async () => {
    const results = await tavilySearch.search('What is the weather like today?');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify performing a search with invalid query
  it('should throw an error for invalid query', async () => {
    await expect(tavilySearch.search('')).rejects.toThrow();
  });

  // Test case: Verify handling of complex searches
  it('should handle complex searches', async () => {
    const results = await tavilySearch.search('Explain the concept of quantum computing');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of ambiguous searches
  it('should handle ambiguous searches', async () => {
    const results = await tavilySearch.search('What is AI?');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches in different languages
  it('should handle searches in different languages', async () => {
    const resultsEn = await tavilySearch.search('What is the weather like today?');
    expect(resultsEn).toBeDefined();
    expect(resultsEn.length).toBeGreaterThan(0);

    const resultsEs = await tavilySearch.search('¿Cómo está el clima hoy?');
    expect(resultsEs).toBeDefined();
    expect(resultsEs.length).toBeGreaterThan(0);

    const resultsFr = await tavilySearch.search('Quel temps fait-il aujourd\'hui?');
    expect(resultsFr).toBeDefined();
    expect(resultsFr.length).toBeGreaterThan(0);
  });

  // Test case: Verify handling of searches with special characters
  it('should handle searches with special characters', async () => {
    const results = await tavilySearch.search('What is the meaning of life?');
    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);
  });

});