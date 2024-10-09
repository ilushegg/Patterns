// Паттерн "Медиатор" (Mediator) используется для уменьшения связности между объектами в системе. 
// Вместо того чтобы объекты напрямую взаимодействовали друг с другом,
// они общаются через медиатора, который управляет их взаимодействиями. Это упрощает поддержку и расширяемость кода.


// Медиатор
class ChatMediator {
    constructor() {
        this.users = {};
    }

    addUser(user) {
        this.users[user.name] = user;
        user.mediator = this; // Привязываем медиатор к пользователю
    }

    sendMessage(message, from, to) {
        if (to in this.users) {
            this.users[to].receiveMessage(message, from);
        } else {
            console.log(`Пользователь ${to} не найден.`);
        }
    }
}

// Пользователь
class User {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    sendMessage(message, to) {
        console.log(`${this.name} отправляет сообщение "${message}" пользователю ${to}`);
        this.mediator.sendMessage(message, this.name, to);
    }

    receiveMessage(message, from) {
        console.log(`${this.name} получил сообщение от ${from}: "${message}"`);
    }
}

// Клиентский код
const mediator = new ChatMediator();

const alice = new User('Алиса');
const bob = new User('Боб');

mediator.addUser(alice);
mediator.addUser(bob);

alice.sendMessage('Привет, Боб!', 'Боб');
bob.sendMessage('Привет, Алиса!', 'Алиса');
alice.sendMessage('Как дела, Боб?', 'Боб');
bob.sendMessage('Все отлично, спасибо!', 'Алиса');
