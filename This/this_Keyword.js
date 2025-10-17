console.log(this);

function login() {
    console.log(this);
};

login();

const user = {
    fname: 'Vimal',
    lname: 'Kumar',
    printFullName: function() {
        console.log(this);
    }
};

user.printFullName();

const user = {
    name: 'Vimal Kumar',
    printName: function() {
        console.log('upper', this);

        const printAgain = function() {
            console.log('inner', this);
        };

        printAgain();
    }
}

user.printName();

const user = {
    name: 'Vimal Kumar',
    printName: function() {
        console.log('upper', this);

        const printAgain = () => {
            console.log('inner', this);
        };

        printAgain();
    }
}

user.printName();