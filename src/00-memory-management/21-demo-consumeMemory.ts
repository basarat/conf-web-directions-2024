import { memoryUsed } from "./00-memoryUsed";
import { consume } from "./20-consumeMemory";

console.log(memoryUsed());
consume("🗑️");
console.log(memoryUsed());
