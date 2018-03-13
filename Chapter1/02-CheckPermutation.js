// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(string1, string2) {
  var hashTable = {};
  for (var i = 0; i < string1.length; i++) {
    if (!hashTable[string1[i]]) {
      hashTable[string1[i]] = 1;
    } else {
      hashTable[string1[i]]++;
    }
  }

  for (var j = 0; j < string2.length; j++) {
    if (!hashTable[string2[j]]) {
      return false;
    } else {
      hashTable[string2[j]]--;
      if (hashTable[string2[j]] < 0) {
        return false;
      }
    }
  }

  return true;
}
