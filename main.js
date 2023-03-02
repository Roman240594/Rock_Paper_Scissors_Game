const user = document.querySelectorAll('.name');

let write = setTimeout(() => {
    userName = prompt('What is your name?');
    writeUserName();
}, 300);

let writeUserName = () => {
    if (userName == null || userName == undefined || userName == '') {
        for (let item of user) {
            item.innerText = 'You';
        }
    } else {
        for (let item of user) {
            item.innerText = userName;
        }
    }
};