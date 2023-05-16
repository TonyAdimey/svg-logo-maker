const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('Test for a triangle with a red bg'), () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<ploygon points="250, 60 100, 400 400, 400" fill="red" />');  
    };
});

describe('Circle', () => {
    test('Test for a circle with a blue bg'), () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');  
    };
});

describe('Square', () => {
    test('Test for a square with a green bg'), () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="50" height="50" fill="green" />');  
    };
});