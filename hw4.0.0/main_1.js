function enterNumber () {
    let value = prompt("Enter a number greater than 100");
    for (let i = 0; i < 9; i++) {
        if (value < 100) {
            value = prompt("Try again");
        } else {
            break;
        }
    }
    return console.log(value);
}