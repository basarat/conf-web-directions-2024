import { collectGarbage, memoryUsed } from "./utils";

export function fillMap(mapLike: WeakMap<WeakKey, unknown>, char: string) {
  for (let index = 0; index < 2500; index++) {
    mapLike.set({ id: Math.random() }, new Array(100_000).fill(char));
  }
}

console.log("-------------- Map --------------");
const map = new Map();

console.log("start", memoryUsed());
fillMap(map, "🌶️");
console.log("end", memoryUsed());
collectGarbage();

console.log("start", memoryUsed());
fillMap(map, "🔥");
console.log("end", memoryUsed());
collectGarbage();
