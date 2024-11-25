export function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("💥") });
  }
  return result;
}

{
  let another0 = allocate();
  console.log(another0.length);
}

{
  let another1 = allocate();
  console.log(another1.length);
}

{
  let another2 = allocate();
  console.log(another2.length);
}

{
  let another3 = allocate();
  console.log(another3.length);
}

{
  let another4 = allocate();
  console.log(another4.length);
}
