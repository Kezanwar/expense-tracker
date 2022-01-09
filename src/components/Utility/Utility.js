// Utility functions stored here

export const byDate = (a, b) => (a.date.valueOf() - b.date.valueOf());
// Sorts array of objects by date if passed into .sort array method.
// e.g arrayOfObjects.sort(byDate());

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// Checks if browser is safari, returns true or false. Can apply different classes to elements depending on true or false

