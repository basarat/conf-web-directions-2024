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

let fn1 = closure(allocate());
console.log(fn1()); // 2500

let fn2 = closure(allocate());
console.log(fn2()); // 2500

let fn3 = closure(allocate());
console.log(fn3()); // 2500

let fn4 = closure(allocate());
console.log(fn4()); // 2500
