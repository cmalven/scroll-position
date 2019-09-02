# Scroll Position

Tools for finding the relationship of an element to a scrollable viewport.

---

## Dominant Element

Returns the element in a collection that is currently occupying the most visible spaces in the viewport.

```sh
```

## Closest to Center

Returns the element in a collection whose center is currently the closest to the center of the viewport.

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