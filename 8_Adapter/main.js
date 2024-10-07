// Паттерн Адаптер (Adapter) позволяет объектам с несовместимыми интерфейсами работать вместе. 
// Он выступает в роли моста между ними, позволяя клиенту взаимодействовать с объектом, 
// который не соответствует ожидаемому интерфейсу.


class OldSystem {
    getData() {
        return {
            username: 'john_doe',
            age: 30
        };
    }
}

class NewSystem {
    getUserData() {
        return {
            userName: 'john_doe',
            userAge: 30
        };
    }
}

class Adapter {
    constructor(newSystem) {
        this.newSystem = newSystem;
    }

    getData() {
        const data = this.newSystem.getUserData();
        return {
            username: data.userName,
            age: data.userAge
        };
    }
}

const oldSystem = new OldSystem();
const newSystem = new NewSystem();
const adapter = new Adapter(newSystem);

console.log(oldSystem.getData()); // { username: 'john_doe', age: 30 }
console.log(adapter.getData()); // { username: 'john_doe', age: 30 }