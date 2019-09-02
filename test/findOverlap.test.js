import { findOverlap } from '../dist/scroll-position.umd';

describe('Find Overlap', () => {
  test('Finds overlap with no scroll', () => {
    const overlap = findOverlap(
      0,
      1000,
      500,
      1000
    );
    expect(overlap).toBe(500);
  });

  test('Finds overlap with scroll', () => {
    const overlap = findOverlap(
      500,
      1000,
      500,
      1000
    );
    expect(overlap).toBe(1000);
  });
});