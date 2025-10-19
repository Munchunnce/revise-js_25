const user = {
    fname: 'Vimal',
    lname: 'Kumar',
    getFullName: function() {
        console.log(this.fname);
    }
};

const user2 = {
    fname: 'Munchun'
};

const getFullName = user.getFullName.bind(user2);
getFullName();