class Shape {
    constructor(){
        this.color = '';
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<ploygon points="250, 60 100, 400 400, 400" fill="${this.color}" />`;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="50" height="50" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };