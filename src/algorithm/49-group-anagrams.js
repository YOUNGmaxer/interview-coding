/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const record = new Object();

  for (let str of strs) {
    const counter = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      counter[str[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    record[counter] ? record[counter].push(str) : record[counter] = [str];
  }

  return Object.values(record);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
