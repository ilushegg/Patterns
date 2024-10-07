// Паттерн Декоратор — это структурный паттерн проектирования, 
// который позволяет динамически добавлять объектам новую 
// функциональность, оборачивая их в полезные "обёртки" (декораторы). 
// Он помогает поддерживать гибкость и расширяемость кода. 
// В JavaScript этот паттерн может быть реализован различными способами, включая использование классов или функций.

// Основные принципы паттерна Декоратор:
// - Композиция вместо наследования: Паттерн Декоратор использует композицию для расширения функциональности объектов.
// - Прозрачность для клиентов: Клиенты могут использовать декорированные объекты так же, как и основные (недекорированные) объекты.


// Основная функция
function sendMessage(message) {
  console.log(`Sending message: ${message}`);
}

// Декоратор, добавляющий логирование
function logDecorator(fn) {
  return function(...args) {
     console.log(`Function called with arguments: ${args.join(', ')}`);
     return fn(...args);
  };
}

// Оборачиваем основную функцию в декоратор
const sendMessageWithLogging = logDecorator(sendMessage);

// Используем декорированную функцию
sendMessageWithLogging('Hello, World!');


class User {
  constructor(name) {
     this.name = name;
  }

  sendMessage(message) {
     console.log(`${this.name} sends message: ${message}`);
  }
}

// Декоратор, добавляющий логирование
function logMethod(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
     console.log(`Method ${key} called with arguments: ${args.join(', ')}`);
     return originalMethod.apply(this, args);
  };

  return descriptor;
}

class UserWithLogging {
  constructor(name) {
     this.name = name;
  }

  @logMethod()
  sendMessage(message) {
     console.log(`${this.name} sends message: ${message}`);
  }
}

// Используем класс с декорированным методом
const user = new UserWithLogging('Jane Doe');
user.sendMessage('Hello, World!');