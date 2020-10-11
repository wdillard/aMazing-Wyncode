const prompt = require('readline-sync');

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
// Intersection 1: Forward, Right, Back
// Forward: Move to intersection 2
// Right: Hall guides to the right and deadends, Return to 1st intersection.
// Back: Go back to start
console.log('You have come to your firts junction.');
console.log('You have a path ahead or a path to the right.');
console.log('3 options');
// Intersection 2: Right, Left, Back
// Right: Hall deadends. Return back to 2nd intersection.
// Left: Move to intersection 3
// Back: Go back to intersection 1

// Intersection 3: Forward, Right, Back
// Forward: Move to intersection 4
// Right: Hall guides to the right, then turns to the left and deadends. Return to 3rd intersection
// Back: Go back to intersection 2

// Intersection 4: Right, Left, Back
// Right: Move to intersection 5
// Left: Hall turns left and turns right to EXIT, You Win!!!
// Back: Go back to intersection 3

// Intersection 5: Forward, Left, Back
// Forward: Hall deadends
// Left: Hall deadends
// Back: Go back intersection 4
