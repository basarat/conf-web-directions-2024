class Heavy {
  constructor(char) {
    this.large = new Array(100_000).fill(char);
  }
}

function consume(char) {
  const items = [];
  for (let index = 0; index < 2500; index++) {
    items.push(new Heavy(char));
  }
  return items;
}

let trash = consume("🗑️");
let kpop = consume("🫰🏻");
let rocket = consume("🚀");
let rose = consume("🌹");
let fire = consume("🔥");
let tsunami = consume("🌊");
let tornado = consume("🌪️");