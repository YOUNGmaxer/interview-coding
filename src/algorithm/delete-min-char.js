/**
 * 删除字符串中出现次数最少的字符
 * @param {*} str 
 */
function deleteMinChar(str) {
  const counter = {};
  const strArr = str.split('');

  strArr.forEach(letter => {
    if (!counter[letter]) {
      counter[letter] = 1;
    } else {
      counter[letter]++;
    }
  });

  const minLetterCount = Math.min(...Object.values(counter));
  const result = [];
  strArr.forEach(letter => {
    if (counter[letter] !== minLetterCount) {
      result.push(letter);
    }
  });

  return result.join('');
}

console.log(deleteMinChar('aabbccdef')); // aabbcc
console.log(deleteMinChar('ababac')); // ababa
console.log(deleteMinChar('aaabbbcceeff')); // aaabbb
