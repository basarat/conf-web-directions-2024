let a, b;

a = { element: "div" };
b = { element: "input" };

export let weakSet = new WeakSet();
weakSet.add(a);
weakSet.add(b);

console.log(weakSet.has(a)); // true
console.log(weakSet.has(b)); // true

// a and b go out of scope
a = null;
b = null;

// WeakSet => has an internal weak reference to its members
// allows garbage collection of the original x and y objects