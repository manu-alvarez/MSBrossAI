import { describe, it, expect, beforeEach } from 'vitest';
import { GeminiService } from '../src/gemini';

// Test suite for Gemini service functionality
describe('GeminiService', () => {
  let geminiService;

  beforeEach(() => {
    // Initialize the Gemini service before each test
    geminiService = new GeminiService();
  });

  // Test case: Verify service initialization
  it('should initialize the service', () => {
    expect(geminiService).toBeDefined();
  });

  // Test case: Verify query processing
  it('should process a query', async () => {
    const result = await geminiService.processQuery('What is the weather like today?');
    expect(result).toBeDefined();
    expect(result).toContain('weather');
  });

  // Test case: Verify query processing with invalid query
  it('should throw an error for invalid query', async () => {
    await expect(geminiService.processQuery('')).rejects.toThrow();
  });

  // Test case: Verify handling of complex queries
  it('should handle complex queries', async () => {
    const result = await geminiService.processQuery('Explain the concept of quantum computing');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(100);
  });

  // Test case: Verify handling of ambiguous queries
  it('should handle ambiguous queries', async () => {
    const result = await geminiService.processQuery('What is AI?');
    expect(result).toBeDefined();
    expect(result).toContain('artificial intelligence');
  });

  // Test case: Verify handling of queries in different languages
  it('should handle queries in different languages', async () => {
    const resultEn = await geminiService.processQuery('What is the weather like today?');
    expect(resultEn).toBeDefined();
    expect(resultEn).toContain('weather');

    const resultEs = await geminiService.processQuery('¿Cómo está el clima hoy?');
    expect(resultEs).toBeDefined();
    expect(resultEs).toContain('clima');

    const resultFr = await geminiService.processQuery('Quel temps fait-il aujourd\'hui?');
    expect(resultFr).toBeDefined();
    expect(resultFr).toContain('temps');
  });

  // Test case: Verify handling of queries with special characters
  it('should handle queries with special characters', async () => {
    const result = await geminiService.processQuery('What is the meaning of life?');
    expect(result).toBeDefined();
    expect(result).toContain('meaning');
  });

});