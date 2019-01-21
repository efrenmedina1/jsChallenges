// ***********************
// Challenge Assessment 3
// ***********************

// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };


originalObject = {
 age: 19,
 name: 'Luke Skywalker',
 eyeColor: 'blue',
 isJedi: true
};

console.log(originalObject)

console.log(originalObject.age)


var keys = Object.keys(originalObject);
var values = Object.values(originalObject)

console.log(keys[1]);
console.log(values[1])

let x = keys[1];
let y = originalObject.age;

console.log(x)
console.log(y)

//<!-------attempt----->
let newObject = {

}

for(i = 0; i < keys.length; i++){
    newObject[values[i]] = keys[i];
    
}
console.log(newObject)

// var data = {
//     'PropertyA': 1,
//     'PropertyB': 2,
//     'PropertyC': 3
// };

// data.PropertyD = 4;

// console.log(data)



