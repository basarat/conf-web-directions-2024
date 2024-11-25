import { memoryUsed } from "./00-memoryUsed";
import { collectGarbage } from "./10-collectGarbage";
import { consume } from "./20-consumeMemory";

collectGarbage();

console.log("start", memoryUsed());
consume("🗑️");
console.log("end", memoryUsed());
collectGarbage();

console.log("start", memoryUsed());
consume("🫰🏻");
console.log("end", memoryUsed());
collectGarbage();

console.log("start", memoryUsed());
consume("🚀");
console.log("end", memoryUsed());
collectGarbage();
