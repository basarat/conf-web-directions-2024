export function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("💥") });
  }
  return result;
}

function closure(value: unknown[]) {
  const getLength = () => value.length;
  return getLength;
}

const fn1 = closure(allocate());
console.log(fn1()); // 2500

const fn2 = closure(allocate());
console.log(fn2()); // 2500

const fn3 = closure(allocate());
console.log(fn3()); // 2500

const fn4 = closure(allocate());
console.log(fn4()); // 2500
