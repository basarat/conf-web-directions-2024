export const memoryUsed = () =>
  Math.floor(process.memoryUsage().heapUsed / 1e6) + " MB";

export const collectGarbage = () => {
  const before = process.memoryUsage().heapUsed;
  global.gc!();
  const after = process.memoryUsage().heapUsed;
  console.log(`Garbage Collected: ${Math.floor((before - after) / 1e6)} MB`);
};
global.gc!();
