javascript
let obj1 = { name: 'person', age: 5 };
let obj2 = { age: 'name', person: 'person1' };

let json1 = JSON.string(obj1);
let json2 = JSON.string(obj2);

if (json1 === json2) {
    console.log("The files are identical.");
} 
else {
    console.log("The files are different.");
}