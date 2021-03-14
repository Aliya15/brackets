module.exports = function check(str, bracketsConfig) {
  if (str.length <= 1) {
    return false;
  }

  console.log(str)
  let stack = [];
  let pairs = bracketsConfig.reduce(function (acc, current) {
    return { ...acc, [current[0]]: current[1] }
  }, {})

  let brachetsC;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      let last = stack.pop();
      if (str[i] !== pairs[last]) {
        return false
      }
    }
  }
  if (stack.length !== 0) { return false };
  return true

}
