// Паттерн "Легковес" (Flyweight) используется для оптимизации использования памяти и повышения производительности, 
// особенно когда требуется создание множества объектов, которые имеют много общих данных. 
// Этот паттерн позволяет избежать дублирования общих данных, сохраняя их в едином месте.


// Фабрика для создания легковесов
class DocumentFactory {
    constructor() {
        this.documents = {};
    }

    // Метод для получения или создания легковеса
    getDocument(type) {
        if (!this.documents[type]) {
            this.documents[type] = new Document(type);
        }
        return this.documents[type];
    }
}

// Легковес
class Document {
    constructor(type) {
        this.type = type;
    }

    // Метод для отображения информации о документе
    display(title) {
        console.log(`Документ: ${title}, Тип: ${this.type}`);
    }
}

// Клиентский код
const factory = new DocumentFactory();

const doc1 = factory.getDocument('PDF');
doc1.display('Отчет по продажам');

const doc2 = factory.getDocument('DOCX');
doc2.display('План на 2024 год');

const doc3 = factory.getDocument('PDF');
doc3.display('Отчет по маркетингу');

// Проверка, что doc1 и doc3 ссылаются на один и тот же объект
console.log(doc1 === doc3); // true
