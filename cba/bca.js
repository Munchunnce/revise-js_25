// const user = {
//     fname: 'Vimal',
//     lname: 'Kumar',
//     getFullName: function() {
//         console.log(this.fname);
//     }
// };

// const user2 = {
//     fname: 'Munchun'
// };

// const getFullName = user.getFullName.bind(user2);
// getFullName();
//Method Borrowing
// const user = {
//     fname: 'Vimal',
//     lanme: 'Kumar',
//     getFullName(arg1, arg2) {
//         return `${arg1}, ${arg2}! ${this.fname} ${this.lanme}`;
//     }
// };

// const user2 = {
//     fname: 'John',
//     lanme: 'Doe'
// };

// const printName = user.getFullName.call(user2, 'Hi', 'Good Morning');
// console.log(printName);
// console.log(user.getFullName.call(user2, 'Hi', 'Good Morning'));
// console.log(user.getFullName.apply(user2, ['Hi', 'Good Morning']));

// Function Currying

function multiply(a, b) {
    return a * b;
};

const doubleIt = multiply.bind(null, 2);
console.log(doubleIt(25));