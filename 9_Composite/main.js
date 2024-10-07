// Паттерн Компоновщик (Composite) является структурным паттерном проектирования, 
// который позволяет сгруппировать объекты в древовидную структуру для представления 
// иерархий "часть-целиком". Этот паттерн позволяет клиентам работать с 
// индивидуальными объектами и композициями объектов одинаковым образом.


class FileSystemComponent {
    getName() {
        throw new Error("Метод getName должен быть реализован");
    }
    display(indent) {
        throw new Error("Метод display должен быть реализован");
    }
}

class File extends FileSystemComponent {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    display(indent = '') {
        console.log(`${indent}File: ${this.getName()}`);
    }
}

class Directory extends FileSystemComponent {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        if (index >= 0) {
            this.children.splice(index, 1);
        }
    }

    getName() {
        return this.name;
    }

    display(indent = '') {
        console.log(`${indent}Directory: ${this.getName()}`);
        for (const child of this.children) {
            child.display(`${indent}  `);
        }
    }
}

const root = new Directory('root');
const bin = new Directory('bin');
const tmp = new Directory('tmp');

const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const file3 = new File('file3.txt');

bin.add(file1);
bin.add(file2);
tmp.add(file3);

root.add(bin);
root.add(tmp);

// Отображение структуры
root.display();
// Directory: root
//   Directory: bin
//     File: file1.txt
//     File: file2.txt
//   Directory: tmp
//     File: file3.txt