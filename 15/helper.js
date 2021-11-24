export const revertMe = (s) => {
  let reverse = '';
  for (let i = 0; i < s.length; i++) {
    reverse += s[s.length - 1 - i];
  }
  return reverse;
}