import { collectGarbage, memoryUsed } from "./utils";

export function fillMap(mapLike: WeakMap<WeakKey, unknown>, char: string) {
  for (let index = 0; index < 2500; index++) {
    mapLike.set({ id: Math.random() }, new Array(100_000).fill(char));
  }
}

console.log("-------------- WeakMap --------------");
const weakMap = new WeakMap();

console.log("start", memoryUsed());
fillMap(weakMap, "🍨");
console.log("end", memoryUsed());
collectGarbage();

console.log("start", memoryUsed());
fillMap(weakMap, "🧊");
console.log("end", memoryUsed());
collectGarbage();

// console.log("start", memoryUsed());
// fillMap(weakMap, "🌹");
// console.log("end", memoryUsed());
// collectGarbage();

// console.log("start", memoryUsed());
// fillMap(weakMap, "🫰🏻");
// console.log("end", memoryUsed());
// collectGarbage();
