function allocate() {
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

type Result = (() => number) | null;

let fn1: Result = closure(allocate());
console.log(fn1()); // 2500
fn1 = null;

let fn2: Result = closure(allocate());
console.log(fn2()); // 2500
fn2 = null;

let fn3: Result = closure(allocate());
console.log(fn3()); // 2500
fn3 = null;

let fn4: Result = closure(allocate());
console.log(fn4()); // 2500
fn4 = null;
