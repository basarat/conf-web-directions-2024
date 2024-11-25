import { memoryUsed } from "./00-memoryUsed";
import { consume } from "./20-consumeMemory";

console.log("start", memoryUsed());
const trash = consume("🗑️");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const korean = consume("🫰🏻");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const rocket = consume("🚀");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const rose = consume("🌹");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const fire = consume("🔥");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const tsunami = consume("🌊");
console.log("end", memoryUsed());

console.log("start", memoryUsed());
const tornado = consume("🌪️");
console.log("end", memoryUsed());
