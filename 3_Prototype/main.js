// Прототипный объект
const carPrototype = {
  make: 'Default',
  model: 'Default',
  year: 2000,
  
  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
};

// Создание новых объектов на основе carPrototype
const car1 = Object.create(carPrototype);
car1.make = 'Toyota';
car1.model = 'Corolla';
car1.year = 2021;

const car2 = Object.create(carPrototype);
car2.make = 'Honda';
car2.model = 'Civic';
car2.year = 2020;

car1.displayInfo(); // Make: Toyota, Model: Corolla, Year: 2021
car2.displayInfo(); // Make: Honda, Model: Civic, Year: 2020

//////////////////////////////////////////////////////////////

// Функция-конструктор для создания объектов User
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.getInfo = function() {
  return `Name: ${this.name}, Age: ${this.age}`;
};

// Создание нового пользователя
const user1 = new User('Alice', 30);
console.log(user1.getInfo()); // Name: Alice, Age: 30

// Создание клона используя Object.create
const user2 = Object.create(user1);
user2.name = 'Bob';
user2.age = 25;

console.log(user2.getInfo()); // Name: Bob, Age: 25