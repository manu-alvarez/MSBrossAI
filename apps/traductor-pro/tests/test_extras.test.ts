import { describe, it, expect } from 'vitest';
import { generateSummary, translateText, extractKeywords } from '../src/extras';

// Test suite for extras functionality
describe('extras', () => {

  // Test case: Verify summary generation
  describe('generateSummary', () => {
    it('should generate a summary for valid text', async () => {
      const summary = await generateSummary('This is a test document with some sample text.');
      expect(summary).toBeDefined();
      expect(summary.length).toBeLessThanOrEqual(200);
    });

    it('should throw an error for empty text', async () => {
      await expect(generateSummary('')).rejects.toThrow();
    });

    it('should generate summaries for different languages', async () => {
      const summaryEn = await generateSummary('This is an English document.');
      expect(summaryEn).toBeDefined();

      const summaryEs = await generateSummary('Este es un documento en español.');
      expect(summaryEs).toBeDefined();

      const summaryFr = await generateSummary('Ceci est un document en français.');
      expect(summaryFr).toBeDefined();
    });
  });

  // Test case: Verify text translation
  describe('translateText', () => {
    it('should translate text to different languages', async () => {
      const translationEn = await translateText('Hello', 'es');
      expect(translationEn).toBeDefined();
      expect(translationEn).toContain('Hola');

      const translationEs = await translateText('Hola', 'fr');
      expect(translationEs).toBeDefined();
      expect(translationEs).toContain('Bonjour');

      const translationFr = await translateText('Bonjour', 'en');
      expect(translationFr).toBeDefined();
      expect(translationFr).toContain('Hello');
    });

    it('should throw an error for empty text', async () => {
      await expect(translateText('', 'es')).rejects.toThrow();
    });

    it('should throw an error for invalid language codes', async () => {
      await expect(translateText('Hello', '')).rejects.toThrow();
      await expect(translateText('Hello', 'invalid')).rejects.toThrow();
    });
  });

  // Test case: Verify keyword extraction
  describe('extractKeywords', () => {
    it('should extract keywords from text', async () => {
      const keywords = await extractKeywords('This is a test document with some sample text.');
      expect(keywords).toBeDefined();
      expect(keywords.length).toBeGreaterThan(0);
    });

    it('should throw an error for empty text', async () => {
      await expect(extractKeywords('')).rejects.toThrow();
    });

    it('should extract keywords from different languages', async () => {
      const keywordsEn = await extractKeywords('This is an English document.');
      expect(keywordsEn).toBeDefined();

      const keywordsEs = await extractKeywords('Este es un documento en español.');
      expect(keywordsEs).toBeDefined();

      const keywordsFr = await extractKeywords('Ceci est un document en français.');
      expect(keywordsFr).toBeDefined();
    });
  });

});