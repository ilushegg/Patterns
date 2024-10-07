// Паттерн проектирования "Мост" (Bridge) используется для разделения
//  абстракции и реализации, что позволяет изменять их независимо друг от друга. 
//  Это полезно, когда вы хотите избежать жесткой привязки между абстракцией и её реализацией.


class Shape {
    constructor(renderer) {
        this.renderer = renderer; // связь с реализацией
    }

    draw() {
        throw new Error('Метод draw() должен быть переопределен!');
    }

    resize() {
        throw new Error('Метод resize() должен быть переопределен!');
    }
}


class CanvasRenderer {
    render(shape) {
        console.log(`Рисуем фигуру на канвасе: ${shape.getDescription()}`);
    }
}

class SvgRenderer {
    render(shape) {
        console.log(`Рисуем фигуру в SVG: ${shape.getDescription()}`);
    }
}

class Circle extends Shape {
    constructor(radius, renderer) {
        super(renderer); // передаем реализацию при создании
        this.radius = radius;
    }

    draw() {
        this.renderer.render(this);
    }

    resize(newRadius) {
        this.radius = newRadius;
    }

    getDescription() {
        return `Круг с радиусом ${this.radius}`;
    }
}

class Square extends Shape {
    constructor(sideLength, renderer) {
        super(renderer);
        this.sideLength = sideLength;
    }

    draw() {
        this.renderer.render(this);
    }

    resize(newSideLength) {
        this.sideLength = newSideLength;
    }

    getDescription() {
        return `Квадрат со стороной ${this.sideLength}`;
    }
}

const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SvgRenderer();

const circle = new Circle(5, canvasRenderer);
circle.draw(); // Рисуем фигуру на канвасе: Круг с радиусом 5

const square = new Square(10, svgRenderer);
square.draw(); // Рисуем фигуру в SVG: Квадрат со стороной 10

circle.resize(10);
circle.draw(); // Рисуем фигуру на канвасе: Круг с радиусом 10