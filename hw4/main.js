function enterNumber() {
    let value = prompt('Введите число больше 100:');
    for (let i = 0; i < 9; i++) {
        if (+value < 100) {
            value = prompt("Попробуйте снова");
        } else if (value > 100 || (isNaN(+value))) {
            return console.log(value);
        }
    }
}
enterNumber();