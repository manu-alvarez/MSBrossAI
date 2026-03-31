import { describe, it, expect, beforeEach } from 'vitest';
import { AIProvider } from '../src/aiProvider';

// Test suite for AI provider functionality
describe('AIProvider', () => {
  let aiProvider;

  beforeEach(() => {
    // Initialize the AI provider before each test
    aiProvider = new AIProvider();
  });

  // Test case: Verify provider initialization
  it('should initialize the provider', () => {
    expect(aiProvider).toBeDefined();
  });

  // Test case: Verify query processing
  it('should process a query', async () => {
    const result = await aiProvider.processQuery('What is the weather like today?');
    expect(result).toBeDefined();
    expect(result).toContain('weather');
  });

  // Test case: Verify query processing with invalid query
  it('should throw an error for invalid query', async () => {
    await expect(aiProvider.processQuery('')).rejects.toThrow();
  });

  // Test case: Verify fallback to alternative providers
  it('should fallback to alternative providers', async () => {
    // Simulate a failure in the primary provider
    aiProvider.simulateFailure(true);
    const result = await aiProvider.processQuery('What is the weather like today?');
    expect(result).toBeDefined();
    expect(result).toContain('weather');
  });

  // Test case: Verify handling of complex queries
  it('should handle complex queries', async () => {
    const result = await aiProvider.processQuery('Explain the concept of quantum computing');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(100);
  });

  // Test case: Verify handling of ambiguous queries
  it('should handle ambiguous queries', async () => {
    const result = await aiProvider.processQuery('What is AI?');
    expect(result).toBeDefined();
    expect(result).toContain('artificial intelligence');
  });

  // Test case: Verify handling of queries in different languages
  it('should handle queries in different languages', async () => {
    const resultEn = await aiProvider.processQuery('What is the weather like today?');
    expect(resultEn).toBeDefined();
    expect(resultEn).toContain('weather');

    const resultEs = await aiProvider.processQuery('¿Cómo está el clima hoy?');
    expect(resultEs).toBeDefined();
    expect(resultEs).toContain('clima');

    const resultFr = await aiProvider.processQuery('Quel temps fait-il aujourd\'hui?');
    expect(resultFr).toBeDefined();
    expect(resultFr).toContain('temps');
  });

  // Test case: Verify handling of queries with special characters
  it('should handle queries with special characters', async () => {
    const result = await aiProvider.processQuery('What is the meaning of life?');
    expect(result).toBeDefined();
    expect(result).toContain('meaning');
  });

});