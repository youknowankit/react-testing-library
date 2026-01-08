export default function sum(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(sum(1, 2));
