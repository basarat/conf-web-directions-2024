export function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("💥") });
  }
  return result;
}

(() => {
  let result = allocate();
  console.log(result.length);
})();

(() => {
  let result = allocate();
  console.log(result.length);
})();

(() => {
  let result = allocate();
  console.log(result.length);
})();

(() => {
  let result = allocate();
  console.log(result.length);
})();

(() => {
  let result = allocate();
  console.log(result.length);
})();
