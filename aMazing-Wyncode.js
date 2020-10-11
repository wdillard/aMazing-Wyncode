const prompt = require('readline-sync');

const commands = [ 'Forward ', 'Back ', 'Right ', 'Left '];
let firstCommands = ['Forward ', 'Right ', 'Back '];
let secondCommands = ['Right ', 'Left ', 'Back '];
let thirdCommands = ['Forward ', 'Right ', 'Back '];
let forthCommands =['Right ', 'Left ', 'Back '];
let fifthCommands = ['Forward ', 'Left ', 'Back '];

console.log('*******************     *******  ******         *****         *****');
console.log('*                       *     *  *    *        *    *        *   *');
console.log('*                       *     *  *    *       *     *       *   *');
console.log('*     *******************     *  *    *      *      *      *   *');
console.log('*     *                       *  *    *     *       *     *   *');
console.log('*     *                       *  *    *    *   *    *    *   *');
console.log('*     *     *******************  *    *   *   **    *   *   *');
console.log('*         aMazing             *  *    *  *   * *    *  *   *');
console.log('*             Wyncode         *  *    * *   *  *    * *   *');
console.log('*     *************     *******  *    **   *   *    **   *');
console.log('*                 *           *  *    *   *    *    *   *');
console.log('*                 *           *  *       *     *       *');
console.log('*     *************     *     *  *      *      *      *');
console.log('*     *                 *     *  *     *       *     *');
console.log('*     *                 *     *  *    *        *    *');
console.log('*******     *******************  *****         *****');

console.log('');
// The game will be a maze that you will enter and will be given options at the important intersections

// There are 5 inportant intersections the will have options

// Start
console.log('You have now entered the maze and are guided right and then left.');
console.log('')

let firstIntersection = true;

// Intersection 1: Forward, Right, Back
// Forward: Move to intersection 2
// Right: Hall guides to the right and deadends, Return to 1st intersection.
// Back: Go back to start

while(firstIntersection) {
    let userInput = prompt.question(`\n Choose a direction: ${firstCommands.toString()} \n`)
    if (userInput.trim().toUpperCase() === 'FORWARD') {
        console.log('You traved forward to intersection 2.');
        firstIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall guides to the right and deadends, Return to intersection 1.');
        firstIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        firstIntersection = true;
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log('INVALID COMMAND')
    } else {
        firstIntersection = false;
    }
        
}

let secondIntersection = true;

// Intersection 2: Right, Left, Back
// Right: Hall deadends. Return back to 2nd intersection.
// Left: Move to intersection 3
// Back: Go back to intersection 1

while(secondIntersection) {
    let userInput = prompt.question(`Choose a direction: ${secondCommands.toString()}`)
    if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('You turned left and traved to intersection 3.');
        secondIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall deadends. Return back to intersection 2.');
        secondIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        firstIntersection = true;
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log('INVALID COMMAND')
    } else {
        secondIntersection = false;
    }
}


let thirdIntersection = true;

// Intersection 3: Forward, Right, Back
// Forward: Move to intersection 4
// Right: Hall guides to the right, then turns to the left and deadends. Return to intersection 3
// Back: Go back to intersection 2

while(thirdIntersection) {
    let userInput = prompt.question(`Choose a direction: ${thirdCommands.toString()}`)
    if (userInput.trim().toUpperCase() === 'FORWARD') {
        console.log('You traved forward to intersection 4.');
        thirdIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall guides to the right, then turns to the left and deadends. Return to intersection 3.');
        thirdIntersection = true;
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward');
        secondIntersection = true;
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log('INVALID COMMAND')
    } else {
        thirdIntersection = false;
    }
}

let forthIntersection = true;

// Intersection 4: Right, Left, Back
// Left: Move to intersection 5
// Right: Hall guides right and the left to EXIT, You Win!!!
// Back: Go back to intersection 3

while(forthIntersection) {
    let userInput = prompt.question(`Choose a direction: ${forthCommands.toString()}`)
    if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('You turned left and traved to intersection 5.');
        forthIntersection = false;
    } else if (userInput.trim().toUpperCase() === 'RIGHT') {
        console.log('Hall guides right and the left to EXIT, You Win!!!')
        playAgain();
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('You should push forward')
        thirdIntersection = true;
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log('INVALID COMMAND')
    } else {
        playAgain;
    }
}

let fifthIntersection = true;

// Intersection 5: Forward, Left, Back
// Forward: Hall deadends
// Left: Hall deadends
// Back: Go back intersection 4

while(fifthIntersection) {
    let userInput = prompt.question(`Choose a direction: ${fifthCommands.toString()}`)
    if (userInput.trim().toUpperCase() === 'FORWARD') {
        console.log('Hall deadends, back to intersection 5.');
        fifthIntersection();
    } else if (userInput.trim().toUpperCase() === 'LEFT') {
        console.log('Hall deadends, back to intersection 5.')
        fifthIntersection();
    } else if (userInput.trim().toUpperCase() === 'BACK') {
        console.log('Good idea to retrace and regroup.')
        forthIntersection();
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log('INVALID COMMAND')
    } else {
        fifthIntersection = false;
    }
}
