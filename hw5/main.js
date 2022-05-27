function  average(arr) {
    if(arr.length === 0)
        return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
let res = [15, 25, 35, 45, 55, 65, 75];
console.log(average(res));
