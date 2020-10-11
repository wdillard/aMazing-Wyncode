const prompt = require('readline-sync');

let firstCommands = [' Forward', ' Right', ' Back'];
let secondCommands = [' Left', ' Right', ' Back'];
let thirdCommands = [' Left', ' Right', ' Back'];
let forthCommands = [' Forward', ' Left', ' Back'];

console.log('*******************     *******  ******         *****         *****');
console.log('*                       *     *  *    *        *    *        *   *');
console.log('*                       *     *  *    *       *     *       *   *');
console.log('*     *******************     *  *    *      *      *      *   *');
console.log('*     *                       *  *    *     *       *     *   *');
console.log('*     *                       *  *    *    *   *    *    *   *');
console.log('*     *     *******************  *    *   *   **    *   *   *');
console.log('*     *   aMazing             *  *    *  *   * *    *  *   *');
console.log('*     *       Wyncode         *  *    * *   *  *    * *   *');
console.log('*     *     *******     *******  *    **   *   *    **   *');
console.log('*     *           *           *  *    *   *    *    *   *');
console.log('*     *           *           *  *       *     *       *');
console.log('*     *     *******     *     *  *      *      *      *');
console.log('*           *           *     *  *     *       *     *');
console.log('*           *           *     *  *    *        *    *');
console.log('*************     *************  *****         *****');

console.log('');
// The game will be a maze that you will enter and will be given options at the important intersections

// There are 5 inportant intersections the will have options

// Start
console.log('You have now entered the maze and are guided right and then left.\n');

let firstIntersection = true;

// Intersection 1: Forward, Right, Back
// Forward: Move to intersection 2
// Right: Hall guides to the right and deadends, Return to intersection 1.
// Back: Never Give Up
console.log('*You have come to the first intersection. \n \nYou have have a chioce to move to the hall forward or right, \nor you can choose to move back.')
while(firstIntersection) {
    let userInput = prompt.question(`\n Choose a direction: ${firstCommands.toString()} \n`)
    console.log('');
    if (userInput.trim().toUpperCase() === 'FORWARD') {
        console.log('*You traved forward to second intersection.');
        firstIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall guides to the right and deadends, You have returned to intersection 1.');
        firstIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        firstIntersection = true;
    } else {
        console.log('INVALID COMMAND');
    }
}

let secondIntersection = true;

// Intersection 2: Right, Left, Back
// Left: Move to intersection 3
// Right: Hall deadends. Return to intersection 2.
// Back: Never give up

console.log('\nYou have have a chioce to move to the hall left or right, \nor you can choose to move back.')

while(secondIntersection) {
    let userInput = prompt.question(`\n Choose a direction: ${secondCommands.toString()} \n`)
    console.log('');
    if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('*You turned left and traved to intersection 3.');
        secondIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall deadends. You have returned back to intersection 2.');
        secondIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        firstIntersection = true;
    } else {
        console.log('INVALID COMMAND');
    }
}

let thirdIntersection = true;

// Intersection 3: Left, Right, Back
// Forward: Move to intersection 4
// Right: Hall guides to the right, then turns to the left and deadends. Return to intersection 3
// Back: You should push on.

console.log('\nYou have have a chioce to move to the hall left or right, \nor you can choose to move back.')

while(thirdIntersection) {
    let userInput = prompt.question(`\n Choose a direction: ${thirdCommands.toString()} \n`)
    console.log('');
    if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('*You turned left and traved to intersection 4.');
        thirdIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall guides to the right, then turns to the left and deadends. \nYou have returned to intersection 3.');
        thirdIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        secondIntersection = true;
    } else {
        console.log('INVALID COMMAND')
    }
}

let forthIntersection = true;

// Intersection 4: Forward, Left, Back
// Forward: Hall guides right and the left to EXIT, You Win!
// Left: You turned left and the hall deadends. You have returned to intersection 4.
// Back: Go back to intersection 3

console.log('\nYou have have a chioce to move to the hall forward or left, \nor you can choose to move back.')

while(forthIntersection) {
    let userInput = prompt.question(`\n Choose a direction: ${forthCommands.toString()} \n`)
    console.log('');
    if (userInput.trim().toUpperCase() === 'FORWARD') {
        console.log('You travel forward and the hall guides right and then left to EXIT, You Win!!!\n');
        forthIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('You turned left and the hall deadends. You have returned to intersection 4.')
        forthIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward')
        thirdIntersection = true;
    } else {
        console.log('INVALID COMMAND')
    }
}

console.log('Thanks for playing.\nGoodbye.');
