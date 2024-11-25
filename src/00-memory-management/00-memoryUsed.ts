export const memoryUsed = () =>
  Math.floor(process.memoryUsage().heapUsed / 1e6) + " MB";
