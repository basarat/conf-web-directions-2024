import { collectGarbage, memoryUsed } from './utils';

function fill(setLike: Set<unknown>, char: string) {
  const objects = [...Array(2500)]
    .map(_ => ({ id: new Array(100_000).fill(char) }));
  for (const object of objects) {
    setLike.add(object);
  }
}

console.log('-------------- Set --------------');
let set: Set<unknown> | null = new Set();

console.log('Start', memoryUsed());
fill(set, '😢');
console.log('After', memoryUsed());
collectGarbage();

console.log('Start', memoryUsed());
fill(set, '🔥');
console.log('After', memoryUsed());
collectGarbage();

// console.log('----------- DeScope Set ---------');
// set = null;
// collectGarbage();
// set = new Set();

// console.log('-------------- Set Keep Adding --------------');
// console.log('Start', memoryUsed());
// fill(set, '🌶️');
// console.log('After', memoryUsed());
// collectGarbage();

// console.log('Start', memoryUsed());
// fill(set, '🌹');
// console.log('After', memoryUsed());
// collectGarbage();
