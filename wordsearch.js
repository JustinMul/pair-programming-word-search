const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (let o = 0; o < letters[0].length; o++) {
        let tempArr = [];
        
        for (let i = 0; i < letters.length; i++) {
          tempArr.push(letters[i][o]);
        }
        tempArr = tempArr.join('');
       
        if (tempArr.includes(word)) {
          return true;
        }
      }
      
    }
  }
  return false;
};

module.exports = wordSearch;
