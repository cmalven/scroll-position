# Scroll Position

Tools for finding the relationship of an element to a scrollable viewport.

---

## Dominant Element

Returns the element in a collection that is currently occupying the most visible spaces in the viewport.

```js
const dominantEl = dominantElement(els);
```

Use the `minVisible` option to specify a minimum number of pixels that must be visible for an element for it to be considered:

```js
const dominantEl = dominantElement(els, {
  minVisible: 100
});
```

## Closest to Center

Returns the element in a collection whose center is currently the closest to the center of the viewport.

```js
const closestEl = closestToCenter(els);
```

Use the `minVisible` option to specify a minimum number of pixels that must be visible for an element for it to be considered:

```js
const closestEl = closestToCenter(els, {
  minVisible: 100
});
```

Use the `maxDistance` option to specify a maximum distance an element can be from the center for it to be considered (defaults to `2000`):

```js
const closestEl = closestToCenter(els, {
  maxDistance: 1000
});
```

## Release

- Bump `version` in `package.json` appropriately.
- Create a new Github release identifying changes.
- A Github Action will automatically run tests and publish the update.

## Test

```sh
# Run tests once
npm test

# Run tests whenever files change
npm run test:watch
```