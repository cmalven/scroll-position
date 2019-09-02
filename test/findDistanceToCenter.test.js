import { findDistanceToCenter } from '../dist/scroll-position.umd';

describe('Find Distance to Center', () => {
  test('Finds distance to center with no scroll', () => {
    const distance = findDistanceToCenter(
      0,
      1000,
      500,
      1000
    );
    expect(distance).toBe(500);
  });

  test('Finds distance to center with scroll', () => {
    const distance = findDistanceToCenter(
      500,
      1000,
      500,
      1000
    );
    expect(distance).toBe(0);
  });
});