import { describe, it, expect, beforeEach } from 'vitest';
import { ComboEngine } from '../src/comboEngine';

// Test suite for combo generation functionality
describe('ComboEngine', () => {
  let comboEngine;

  beforeEach(() => {
    // Initialize the combo engine before each test
    comboEngine = new ComboEngine();
  });

  // Test case: Verify engine initialization
  it('should initialize the engine', () => {
    expect(comboEngine).toBeDefined();
  });

  // Test case: Verify generating a combo
  it('should generate a combo', () => {
    const combo = comboEngine.generateCombo(5);
    expect(combo).toBeDefined();
    expect(combo.length).toBe(5);
  });

  // Test case: Verify generating a combo with invalid size
  it('should throw an error for invalid combo size', () => {
    expect(() => comboEngine.generateCombo(0)).toThrow();
    expect(() => comboEngine.generateCombo(-1)).toThrow();
  });

  // Test case: Verify generating a combo with different sizes
  it('should generate combos of different sizes', () => {
    const combo3 = comboEngine.generateCombo(3);
    expect(combo3.length).toBe(3);

    const combo7 = comboEngine.generateCombo(7);
    expect(combo7.length).toBe(7);
  });

  // Test case: Verify generating a combo with unique elements
  it('should generate a combo with unique elements', () => {
    const combo = comboEngine.generateCombo(5);
    const uniqueElements = new Set(combo);
    expect(uniqueElements.size).toBe(combo.length);
  });

  // Test case: Verify generating a combo with specific elements
  it('should generate a combo with specific elements', () => {
    const elements = ['A', 'B', 'C', 'D', 'E'];
    const combo = comboEngine.generateCombo(3, elements);
    expect(combo.every(item => elements.includes(item))).toBe(true);
  });

  // Test case: Verify generating a combo with invalid elements
  it('should throw an error for invalid elements', () => {
    expect(() => comboEngine.generateCombo(3, [])).toThrow();
    expect(() => comboEngine.generateCombo(3, ['A'])).toThrow();
  });

  // Test case: Verify generating multiple combos
  it('should generate multiple combos', () => {
    const combos = comboEngine.generateMultipleCombos(3, 5, 5);
    expect(combos).toBeDefined();
    expect(combos.length).toBe(5);
    expect(combos.every(combo => combo.length === 5)).toBe(true);
  });

  // Test case: Verify generating multiple combos with invalid parameters
  it('should throw an error for invalid parameters when generating multiple combos', () => {
    expect(() => comboEngine.generateMultipleCombos(0, 5, 5)).toThrow();
    expect(() => comboEngine.generateMultipleCombos(3, 0, 5)).toThrow();
    expect(() => comboEngine.generateMultipleCombos(3, 5, 0)).toThrow();
  });

});