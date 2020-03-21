import { findOverlap } from '../dist/scroll-position.umd';

describe('Find Overlap', () => {
  test('Finds overlap with no scroll and exact height', () => {
    const overlap = findOverlap(
      0,
      1000,
      1000
    );
    expect(overlap).toBe(1000);
  });

  test('Finds overlap with no scroll and partial height', () => {
    const overlap = findOverlap(
      0,
      500,
      1000
    );
    expect(overlap).toBe(500);
  });

  test('Finds overlap with negative scroll', () => {
    const overlap = findOverlap(
      -500,
      1000,
      1000
    );
    expect(overlap).toBe(500);
  });

  test('Finds overlap with positive scroll', () => {
    const overlap = findOverlap(
      500,
      1000,
      1000
    );
    expect(overlap).toBe(500);
  });

  test('Finds overlap with negative scroll out of viewport', () => {
    const overlap = findOverlap(
      -1000,
      1000,
      1000
    );
    expect(overlap).toBe(0);
  });

  test('Finds overlap with positive scroll', () => {
    const overlap = findOverlap(
      1000,
      1000,
      1000
    );
    expect(overlap).toBe(0);
  });
});