import { describe, it, expect } from 'vitest';
import { NIGERIA_CITIES } from '../src';

describe('cities', () => {
  it('includes Lagos', () => {
    expect(NIGERIA_CITIES).toContain('Lagos');
  });
});
