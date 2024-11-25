function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill('💥') });
  }
  return result;
}

export const handlers = {
  get onMove() {
    const memory = allocate();
    return () => memory.length;
  }
};

export type Handler = typeof handlers['onMove'];
