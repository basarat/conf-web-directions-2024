export function counter() {
  
  // What is the scope of this value?
  let value = 0;

  return {
    get count() {
      return value;
    },
    increment() {
      value++;
      return value;
    },
  };
}

let alpha = counter();

console.log(alpha.count); // 0

alpha.increment();

console.log(alpha.count); // 1
