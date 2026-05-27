import { describe, it, expect } from 'vitest';
import { processDocument } from '../src/process';

// Test suite for document processing functionality
describe('processDocument', () => {

  // Test case: Verify document processing with valid input
  it('should process a document with valid input', async () => {
    const result = await processDocument('test.pdf');
    expect(result).toBeDefined();
    expect(result).toHaveProperty('text');
    expect(result).toHaveProperty('summary');
    expect(result).toHaveProperty('translation');
  });

  // Test case: Verify document processing with invalid input
  it('should throw an error with invalid input', async () => {
    await expect(processDocument('')).rejects.toThrow();
    await expect(processDocument('invalid.pdf')).rejects.toThrow();
  });

  // Test case: Verify document processing with different languages
  it('should process documents in different languages', async () => {
    const resultEn = await processDocument('test_en.pdf');
    expect(resultEn.translation).toContain('English');

    const resultEs = await processDocument('test_es.pdf');
    expect(resultEs.translation).toContain('Spanish');

    const resultFr = await processDocument('test_fr.pdf');
    expect(resultFr.translation).toContain('French');
  });

  // Test case: Verify document processing with different formats
  it('should process documents in different formats', async () => {
    const resultPdf = await processDocument('test.pdf');
    expect(resultPdf).toBeDefined();

    const resultDocx = await processDocument('test.docx');
    expect(resultDocx).toBeDefined();

    const resultTxt = await processDocument('test.txt');
    expect(resultTxt).toBeDefined();
  });

  // Test case: Verify document processing with large files
  it('should process large documents', async () => {
    const result = await processDocument('large.pdf');
    expect(result).toBeDefined();
  });

  // Test case: Verify document processing with special characters
  it('should process documents with special characters', async () => {
    const result = await processDocument('special_chars.pdf');
    expect(result).toBeDefined();
  });

  // Test case: Verify document processing with images
  it('should process documents with images', async () => {
    const result = await processDocument('with_images.pdf');
    expect(result).toBeDefined();
  });

  // Test case: Verify document processing with tables
  it('should process documents with tables', async () => {
    const result = await processDocument('with_tables.pdf');
    expect(result).toBeDefined();
  });

});