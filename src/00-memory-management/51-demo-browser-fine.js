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
trash = null;

let kpop = consume("🫰🏻");
kpop = null;

let rocket = consume("🚀");
rocket = null;

let rose = consume("🌹");
rose = null;

let fire = consume("🔥");
fire = null;

let tsunami = consume("🌊");
tsunami = null;

let tornado = consume("🌪️");
tornado = null;
