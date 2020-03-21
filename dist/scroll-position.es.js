const findOverlap = (elOffsetY, elHeight, winHeight) => {
  const y11 = elOffsetY;
  const y12 = y11 + elHeight;
  const y22 = winHeight;
  const yOverlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, 0));

  return yOverlap;
};

const dominantElement = (els, options = {}) => {
  let maxOverlap = 0;
  let maxEl = null;

  // Set defaults
  let settings = {
    minVisible: 0
  };

  // Override defaults with options
  settings = Object.assign({}, settings, options);

  // Loop through elements
  els.forEach(el => {
    // Get the overlap for the element
    const overlap = findOverlap(
      el.getBoundingClientRect().top,
      el.offsetHeight,
      window.innerHeight
    );

    // If the overlap is the largest so far, promote it
    if (overlap > maxOverlap) {
      maxOverlap = overlap;
      return maxEl = el;
    }
  });

  // Return the biggest overlap (or null if none met the minimum)
  return maxOverlap > settings.minVisible ? maxEl : null;
};

const findDistanceToCenter = (elOffsetY, elHeight, winHeight) => {
  const viewportCenter = winHeight / 2;
  const elCenter = elOffsetY + (elHeight / 2);
  return Math.abs(viewportCenter - elCenter);
};

const closestToCenter = (els, options = {}) => {
  let closestDistance = null;
  let closestEl = null;

  // Set defaults
  let settings = {
    minVisible: 0,
    maxDistance: 10000
  };

  // Override defaults with options
  settings = Object.assign({}, settings, options);

  els.forEach(el => {
    const distance = findDistanceToCenter(
      el.getBoundingClientRect().top,
      el.offsetHeight,
      window.innerHeight
    );
    if (!closestDistance) closestDistance = distance;
    if (distance <= closestDistance && distance <= settings.maxDistance) {
      closestDistance = distance;
      return closestEl = el;
    }
  });

  // Throw an error if the cloests all cannot be found
  if (!closestEl) {
    console.warn('No closest element was found that matches your parameters.');
    return null;
  }

  // Return the closest element if it meets the minimum overlap
  const overlap = findOverlap(
    closestEl.getBoundingClientRect().top,
    closestEl.offsetHeight,
    window.innerHeight
  );
  return overlap > settings.minVisible ? closestEl : null;
};

export { closestToCenter, dominantElement, findDistanceToCenter, findOverlap };
