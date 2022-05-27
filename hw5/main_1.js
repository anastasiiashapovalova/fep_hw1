function delSymbol () {
    let str = "hello world";
    str = str.replace(/[l,d]/gi, '');
    return str;
}
console.log(delSymbol());




