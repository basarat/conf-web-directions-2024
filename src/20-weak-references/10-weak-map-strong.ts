export const map = new Map();

let x, y;

x = { element: 'div' };
y = { element: 'input' };

map.set(x, 'alpha');
map.set(y, 'omega');

console.log(map.get(x)); // 'alpha'
console.log(map.get(y)); // 'omega'

// x and y go out of scope
x = null;
y = null;

// map => still has a reference to the original x and y 
//   therefore prevents the original x and y from being garbage collected
console.log([...map.keys()]); // [ { element: 'div' }, { element: 'input' } ] 
