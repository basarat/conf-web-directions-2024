export const memoryUsed = () =>
  Math.floor(process.memoryUsage().heapUsed / 1e6) + " MB";

export const collectGarbage = () => {
  const before = process.memoryUsage().heapUsed;
  global.gc!();
  const after = process.memoryUsage().heapUsed;
  console.log(`Garbage Collected: ${Math.floor((before - after) / 1e6)} MB`);
};

class Heavy {
  large: string[];
  constructor(char: string) {
    this.large = new Array(100_000).fill(char);
  }
}

export function consume(char: string) {
  const items = [];
  for (let index = 0; index < 2500; index++) {
    items.push(new Heavy(char));
  }
  return items;
}
