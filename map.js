// Khởi tạo một Map
let myMap = new Map();


myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(1, 'One'); // Key là số
myMap.set(true, 'Boolean True'); // Key là boolean

console.log(myMap);
// Output: Map { 'name' => 'John', 'age' => 30, 1 => 'One', true => 'Boolean True' }

// Lấy giá trị dựa trên key
console.log(myMap.get('name')); // Output: John
console.log(myMap.get(1)); // Output: One

// Kiểm tra xem Map có key cụ thể không
console.log(myMap.has('age')); // Output: true
console.log(myMap.has('address')); // Output: false

// Xóa một phần tử trong Map
myMap.delete('age');
console.log(myMap); // Output: Map { 'name' => 'John', 1 => 'One', true => 'Boolean True' }


