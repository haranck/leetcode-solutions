/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x < 0 ? -1 : 1;
  const reversed = Number(Math.abs(x).toString().split('').reverse().join(''));
  const result = sign * reversed;

  if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
    return 0;
  }

  return result;
};
