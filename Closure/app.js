// Execution Context
// const username = 'Vimal';

// function login() {
//     const password = 'secret';
//     console.log(`${username} is loging in using ${password}`);
// };

// login();

// Important Example closure
function callApi(method){
    return function(url){
        console.log(`fetching data from ${url} using ${method}`);
    }
};

const url = 'http://example.com';
callApi('GET')(url);