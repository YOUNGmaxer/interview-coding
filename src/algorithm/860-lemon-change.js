/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0, twenty = 0;

  for (let bill of bills) {
    switch (bill) {
      case 5:
        five++;
        break;
      case 10:
        ten++;
        if (five) five--;
        else return false;
        break;
      case 20:
        twenty++;
        let left = 15;
        if (ten) {
          ten--;
          left -= 10;
        }
        while (left > 0 && five > 0) {
          left -= 5;
          five--;
        }
        if (left !== 0) return false;
    }
  }

  return true;
};

console.log(lemonadeChange([5,5,10,10,20]));
