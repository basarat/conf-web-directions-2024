function counter() {
  let count = 0;
  return {
    get count() {
      return count;
    },
    increment() {
      count++;
      return count;
    },
  };
}

let alpha = counter();

console.log(alpha.count); // 0

alpha.increment();

console.log(alpha.count); // 1