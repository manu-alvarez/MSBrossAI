import { describe, it, expect, beforeEach } from 'vitest';
import { ProbabilityCalculator } from '../src/probability';

// Test suite for probability calculations
describe('ProbabilityCalculator', () => {
  let probabilityCalculator;

  beforeEach(() => {
    // Initialize the probability calculator before each test
    probabilityCalculator = new ProbabilityCalculator();
  });

  // Test case: Verify calculator initialization
  it('should initialize the calculator', () => {
    expect(probabilityCalculator).toBeDefined();
  });

  // Test case: Verify calculating probability of a single event
  it('should calculate probability of a single event', () => {
    const probability = probabilityCalculator.calculateProbability(3, 10);
    expect(probability).toBeCloseTo(0.3);
  });

  // Test case: Verify calculating probability with invalid parameters
  it('should throw an error for invalid parameters', () => {
    expect(() => probabilityCalculator.calculateProbability(0, 10)).toThrow();
    expect(() => probabilityCalculator.calculateProbability(3, 0)).toThrow();
    expect(() => probabilityCalculator.calculateProbability(11, 10)).toThrow();
  });

  // Test case: Verify calculating probability of multiple events
  it('should calculate probability of multiple events', () => {
    const probability = probabilityCalculator.calculateMultipleProbabilities([3, 5], [10, 20]);
    expect(probability).toBeCloseTo(0.15);
  });

  // Test case: Verify calculating probability of multiple events with invalid parameters
  it('should throw an error for invalid parameters when calculating multiple probabilities', () => {
    expect(() => probabilityCalculator.calculateMultipleProbabilities([0, 5], [10, 20])).toThrow();
    expect(() => probabilityCalculator.calculateMultipleProbabilities([3, 0], [10, 20])).toThrow();
    expect(() => probabilityCalculator.calculateMultipleProbabilities([3, 5], [0, 20])).toThrow();
    expect(() => probabilityCalculator.calculateMultipleProbabilities([3, 5], [10, 0])).toThrow();
    expect(() => probabilityCalculator.calculateMultipleProbabilities([11, 5], [10, 20])).toThrow();
    expect(() => probabilityCalculator.calculateMultipleProbabilities([3, 21], [10, 20])).toThrow();
  });

  // Test case: Verify calculating combined probability
  it('should calculate combined probability', () => {
    const probability = probabilityCalculator.calculateCombinedProbability([0.3, 0.5]);
    expect(probability).toBeCloseTo(0.65);
  });

  // Test case: Verify calculating combined probability with invalid parameters
  it('should throw an error for invalid parameters when calculating combined probability', () => {
    expect(() => probabilityCalculator.calculateCombinedProbability([0.3, 1.5])).toThrow();
    expect(() => probabilityCalculator.calculateCombinedProbability([0.3, -0.5])).toThrow();
  });

  // Test case: Verify calculating conditional probability
  it('should calculate conditional probability', () => {
    const probability = probabilityCalculator.calculateConditionalProbability(0.3, 0.5);
    expect(probability).toBeCloseTo(0.6);
  });

  // Test case: Verify calculating conditional probability with invalid parameters
  it('should throw an error for invalid parameters when calculating conditional probability', () => {
    expect(() => probabilityCalculator.calculateConditionalProbability(0.3, 1.5)).toThrow();
    expect(() => probabilityCalculator.calculateConditionalProbability(0.3, -0.5)).toThrow();
    expect(() => probabilityCalculator.calculateConditionalProbability(1.5, 0.5)).toThrow();
    expect(() => probabilityCalculator.calculateConditionalProbability(-0.5, 0.5)).toThrow();
  });

});