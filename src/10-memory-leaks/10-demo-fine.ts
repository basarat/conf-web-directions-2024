export function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("💥") });
  }
  return result;
}

let result: unknown[];

result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
