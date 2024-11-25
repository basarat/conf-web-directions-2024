let a, b;

a = { element: "div" };
b = { element: "input" };

export let set = new Set();
set.add(a);
set.add(b);

console.log(set.has(a)); // true
console.log(set.has(b)); // true

// a and b go out of scope
a = null;
b = null;

// Set => has an internal strong reference to its members
console.log([...set]); // [ { element: 'div' }, { element: 'input' } ]
// so the original objects are not garbage collected
