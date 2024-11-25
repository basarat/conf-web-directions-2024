export const weakMap = new WeakMap();

let x, y;

x = { element: 'div' };
y = { element: 'input' };

weakMap.set(x, 'alpha');
weakMap.set(y, 'omega');

console.log(weakMap.get(x)); // 'alpha'
console.log(weakMap.get(y)); // 'omega'

// x and y go out of scope
x = null;
y = null;

// weakMap => has no internal reference to its keys (original x or y)
//   allows garbage collection of the original x and y (+ their values)