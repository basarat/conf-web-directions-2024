export function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("💥") });
  }
  return result;
}

type Result = unknown[] | null;

{
  let result: Result = allocate();
  console.log(result.length);
  result = null;
}

{
  let result: Result = allocate();
  console.log(result.length);
  result = null;
}

{
  let result: Result = allocate();
  console.log(result.length);
  result = null;
}

{
  let result: Result = allocate();
  console.log(result.length);
  result = null;
}

{
  let result: Result = allocate();
  console.log(result.length);
  result = null;
}
