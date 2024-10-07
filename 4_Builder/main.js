// Паттерн Builder(Строитель) — это порождающий паттерн проектирования, 
// который используется для создания сложных объектов пошагово.
// В отличие от других порождающих паттернов, Builder позволяет 
// создавать различные представления объекта, используя один и тот же процесс строительства.

// Основные преимущества использования паттерна Builder:
// - Упрощает создание сложных объектов.
// - Позволяет разделить конструирование объекта на шаги, что упрощает процесс создания.
// - Улучшает читабельность кода.
// - Позволяет избежать конструктора с множеством параметров.

class Car {
  constructor() {
    this.make = '';
    this.model = '';
    this.year = 0;
    this.color = '';
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

// Пример использования:
const carBuilder = new CarBuilder();
const myCar = carBuilder
  .setMake('Toyota')
  .setModel('Camry')
  .setYear(2020)
  .setColor('Красный')
  .build();

console.log(myCar);