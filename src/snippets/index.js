// Solution 1
function findWord(sentence, searchWord) {
  let flag;
  let index;

  for (let i = 0; i < sentence.length; i++) {
    flag = true;
    index = -1;
    for (let j = i; j < i + searchWord.length; j++) {
      if (sentence[j] !== searchWord[++index]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
}

// Solution 2

function findWord(sentence, searchWord) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.substr(i, searchWord.length) === searchWord) {
      return true;
    }
  }
  return false;
}
