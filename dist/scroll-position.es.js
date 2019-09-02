const findOverlap = (scrollTop, winHeight, elTop, elHeight) => {
  const y11 = elTop;
  const y12 = y11 + elHeight;
  const y21 = scrollTop;
  const y22 = scrollTop + winHeight;
  const yOverlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));

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
      window.pageYOffset,
      window.innerHeight,
      el.offsetTop,
      el.offsetHeight
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

const findDistanceToCenter = (scrollTop, winHeight, elTop, elHeight) => {
  const viewportCenter = scrollTop + (winHeight / 2);
  const elCenter = elTop + (elHeight / 2);
  return Math.abs(viewportCenter - elCenter);
};

const closestToCenter = (els) => {
  let closestDistance = null;
  let closestEl = null;

  // Set defaults
  let settings = {
    minVisible: 0,
    maxDistance: 2000
  };

  // Override defaults with options
  settings = Object.assign({}, settings, options);

  els.forEach(el => {
    const distance = findDistanceToCenter(
      window.pageYOffset,
      window.innerHeight,
      el.offsetTop,
      el.offsetHeight
    );
    if (!closestDistance) closestDistance = distance;
    if (distance <= closestDistance && distance <= settings.maxDistance) {
      closestDistance = distance;
      return closestEl = el;
    }
  });

  // Return the closest element if it meets the minimum overlap
  const overlap = findWindowOverlap(
    window.pageYOffset,
    window.innerHeight,
    closestEl.offsetTop,
    closestEl.offsetHeight
  );
  return closestEl && overlap > settings.minVisible ? closestEl : null;
};

export { closestToCenter, dominantElement, findDistanceToCenter, findOverlap };
