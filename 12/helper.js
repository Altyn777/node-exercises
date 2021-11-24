export const hasUpperCaseLetters = (s) => {
  for (const chart of s) {
    if (chart === chart.toUpperCase() && chart.toUpperCase() !== chart.toLowerCase()) return true;
  }
  return false;
}