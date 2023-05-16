const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

function userInput() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter 3 characters to display your SVG Logo',
                name: 'logoText'
            },
            {
                type: 'input',
                message: 'Enter a text color by choosing either a color keyword or a hexidecimal number',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Choose a shape for your SVG Logo',
                choices: ['square', 'circle', 'triangle'],
                name: 'shapeChoice',
            },
            {
                type: 'input',
                message: 'Enter a shape color by choosing either a color keyword or a hexadecimal number',
                name: 'shapeColor',
            },
        ])
};

function saveInput(fileName, answers) {
    let svgString = "";
    svgString = 
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    try {
        fs.writeFileSync(fileName, svgString)
    } catch (error) {
        console.log(error);
    }
};

userInput().then((answers) => {
    saveInput("logo.svg", answers)
});