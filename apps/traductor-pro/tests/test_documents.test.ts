import { describe, it, expect } from 'vitest';
import { extractText, extractImages, extractTables } from '../src/documents';

// Test suite for document extraction functionality
describe('document extraction', () => {

  // Test case: Verify text extraction from documents
  describe('extractText', () => {
    it('should extract text from PDF documents', async () => {
      const text = await extractText('test.pdf');
      expect(text).toBeDefined();
      expect(text).toContain('test');
    });

    it('should extract text from DOCX documents', async () => {
      const text = await extractText('test.docx');
      expect(text).toBeDefined();
      expect(text).toContain('test');
    });

    it('should extract text from TXT documents', async () => {
      const text = await extractText('test.txt');
      expect(text).toBeDefined();
      expect(text).toContain('test');
    });

    it('should throw an error for invalid documents', async () => {
      await expect(extractText('')).rejects.toThrow();
      await expect(extractText('invalid.pdf')).rejects.toThrow();
    });
  });

  // Test case: Verify image extraction from documents
  describe('extractImages', () => {
    it('should extract images from PDF documents', async () => {
      const images = await extractImages('test.pdf');
      expect(images).toBeDefined();
      expect(images.length).toBeGreaterThan(0);
    });

    it('should extract images from DOCX documents', async () => {
      const images = await extractImages('test.docx');
      expect(images).toBeDefined();
      expect(images.length).toBeGreaterThan(0);
    });

    it('should return an empty array for documents without images', async () => {
      const images = await extractImages('no_images.pdf');
      expect(images).toBeDefined();
      expect(images.length).toBe(0);
    });

    it('should throw an error for invalid documents', async () => {
      await expect(extractImages('')).rejects.toThrow();
      await expect(extractImages('invalid.pdf')).rejects.toThrow();
    });
  });

  // Test case: Verify table extraction from documents
  describe('extractTables', () => {
    it('should extract tables from PDF documents', async () => {
      const tables = await extractTables('test.pdf');
      expect(tables).toBeDefined();
      expect(tables.length).toBeGreaterThan(0);
    });

    it('should extract tables from DOCX documents', async () => {
      const tables = await extractTables('test.docx');
      expect(tables).toBeDefined();
      expect(tables.length).toBeGreaterThan(0);
    });

    it('should return an empty array for documents without tables', async () => {
      const tables = await extractTables('no_tables.pdf');
      expect(tables).toBeDefined();
      expect(tables.length).toBe(0);
    });

    it('should throw an error for invalid documents', async () => {
      await expect(extractTables('')).rejects.toThrow();
      await expect(extractTables('invalid.pdf')).rejects.toThrow();
    });
  });

});