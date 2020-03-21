import { findDistanceToCenter } from '../dist/scroll-position.umd';

describe('Find Distance to Center', () => {
  test('Finds distance to center with no scroll and full height', () => {
    expect(findDistanceToCenter(
      0,
      1000,
      1000
    )).toBe(0);
  });

  test('Finds distance to center with no scroll and partial height', () => {
    expect(findDistanceToCenter(
      0,
      500,
      1000
    )).toBe(250);
  });

  test('Finds distance to center with negative scroll', () => {
    const distance = findDistanceToCenter(
      -500,
      1000,
      1000
    );
    expect(distance).toBe(500);
  });

  test('Finds distance to center with positive scroll', () => {
    const distance = findDistanceToCenter(
      500,
      1000,
      1000
    );
    expect(distance).toBe(500);
  });
});