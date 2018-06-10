// Define a JavaScript object
const car = {
  manufacturer: "Toyota",
  model: "Cruiser",
};
console.log(car); // Display the object

const jsonCar = JSON.stringify(car);
console.log(jsonCar); // Display the object as a JSON string

console.log(JSON.parse(jsonCar)); // Display the object
