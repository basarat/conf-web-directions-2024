/**
 * Create References
 */
const createHeavy = () => ({ heavy: new Array(10_000_000).fill("🌹") });

let a = createHeavy(),
  b = createHeavy(),
  c = createHeavy();

let x = new WeakRef(createHeavy()),
  y = new WeakRef(createHeavy()),
  z = new WeakRef(createHeavy());

/**
 * Before Garbage Collection
 */
console.log("Strong", a.heavy[0], b.heavy[0], c.heavy[0]);
console.log(
  "Weak",
  x.deref()?.heavy[0],
  y.deref()?.heavy[0],
  z.deref()?.heavy[0]
);

/**
 * !!PAUSE!!
 * Collect garbage
 **/
console.log("Strong", a.heavy[0], b.heavy[0], c.heavy[0]);
console.log(
  "Weak",
  x.deref()?.heavy[0],
  y.deref()?.heavy[0],
  z.deref()?.heavy[0]
);
