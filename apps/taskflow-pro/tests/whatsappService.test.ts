import { describe, it, expect, beforeEach } from 'vitest';
import { WhatsAppService } from '../src/whatsappService';

// Test suite for WhatsApp service functionality
describe('WhatsAppService', () => {
  let whatsAppService;

  beforeEach(() => {
    // Initialize the service before each test
    whatsAppService = new WhatsAppService();
  });

  // Test case: Verify service initialization
  it('should initialize the service', () => {
    expect(whatsAppService).toBeDefined();
  });

  // Test case: Verify sending a message
  it('should send a message', async () => {
    const result = await whatsAppService.sendMessage('1234567890', 'Hello');
    expect(result).toBe(true);
  });

  // Test case: Verify sending a message with invalid number
  it('should throw an error for invalid number', async () => {
    await expect(whatsAppService.sendMessage('', 'Hello')).rejects.toThrow();
    await expect(whatsAppService.sendMessage('invalid', 'Hello')).rejects.toThrow();
  });

  // Test case: Verify sending a message with empty content
  it('should throw an error for empty content', async () => {
    await expect(whatsAppService.sendMessage('1234567890', '')).rejects.toThrow();
  });

  // Test case: Verify receiving a message
  it('should receive a message', async () => {
    const result = await whatsAppService.receiveMessage('1234567890');
    expect(result).toBeDefined();
    expect(result.content).toContain('Hello');
  });

  // Test case: Verify receiving a message with invalid number
  it('should throw an error for invalid number when receiving', async () => {
    await expect(whatsAppService.receiveMessage('')).rejects.toThrow();
    await expect(whatsAppService.receiveMessage('invalid')).rejects.toThrow();
  });

  // Test case: Verify handling multiple messages
  it('should handle multiple messages', async () => {
    await whatsAppService.sendMessage('1234567890', 'Hello 1');
    await whatsAppService.sendMessage('1234567890', 'Hello 2');
    const messages = await whatsAppService.getMessages('1234567890');
    expect(messages.length).toBe(2);
  });

  // Test case: Verify clearing messages
  it('should clear messages', async () => {
    await whatsAppService.sendMessage('1234567890', 'Hello');
    await whatsAppService.clearMessages('1234567890');
    const messages = await whatsAppService.getMessages('1234567890');
    expect(messages.length).toBe(0);
  });

  // Test case: Verify clearing messages with invalid number
  it('should throw an error for invalid number when clearing', async () => {
    await expect(whatsAppService.clearMessages('')).rejects.toThrow();
    await expect(whatsAppService.clearMessages('invalid')).rejects.toThrow();
  });

});