class Heavy {
  large: string[];
  constructor(char: string) {
    this.large = new Array(100_000).fill(char);
  }
}

export function consume(char: string) {
  const items = [];
  for (let index = 0; index < 2500; index++) {
    items.push(new Heavy(char));
  }
  return items;
}
