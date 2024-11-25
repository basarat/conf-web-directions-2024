import { memoryUsed } from "./00-memoryUsed";
import { consume } from "./20-consumeMemory";


console.log("start", memoryUsed());
consume("🗑️");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🫰🏻");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🚀");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🌹");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🔥");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🌊");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
consume("🌪️");
console.log("end", memoryUsed());
