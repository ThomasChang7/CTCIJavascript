// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(string) {
  let sortedString = string
    .split('')
    .sort()
    .join('');

  for (let i = 1; i < string.length; i++) {
    if (sortedString[i] === sortedString[i - 1]) {
      return false;
    }
    return true;
  }
}
