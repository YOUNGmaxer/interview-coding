/**
 * 将数字转成汉字描述
 * @description 123456 => 十二万三千四百五十六
 * @description 100010001 => 一亿零一万零一
 * @param {*} number 
 */
function numToCh(number) {
  const chNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const chBaseUnit = ['千', '百', '十', ''];
  const chSectionUnit = ['', '万', '亿'];

  // 格式化成 12 位数，便于处理
  const formatedStrNum = String(number).padStart(12, '0');
  // 分成 3 段处理
  const sectionNumList = [formatedStrNum.slice(8, 12), formatedStrNum.slice(4, 8), formatedStrNum.slice(0, 4)];
  // 逐段进行转化
  const formatedSectionNumList = sectionNumList.map((sectionNum, sectionIndex) => 
    sectionNum
      .split('')
      .map((num, index) => num === '0' ? chNum[num] : `${chNum[num]}${chBaseUnit[index]}`)
      .join('')
      .replace(/^零+/, '零') + (Number(sectionNum) > 0 ? chSectionUnit[sectionIndex] : '')
  );
  // 合成
  const result = formatedSectionNumList.reverse().join('').replace(/^零+/, '').replace(/零+/, '零').replace(/^一十/, '十');
  return result;
}

console.log(numToCh(100010001)); // 一亿零一万零一
console.log(numToCh(100000001)); // 一亿零一
console.log(numToCh(123456)); // 十二万三千四百五十六
