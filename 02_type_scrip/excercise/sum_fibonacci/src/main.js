function getFibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return getFibonacci(num - 1) + getFibonacci(num - 2);
    }
}
var sum = 0;
var n = 10;
console.log("Day so fibonacci la : ");
for (var i = 0; i < n; i++) {
    console.log(getFibonacci(i));
    sum += getFibonacci(i);
}
console.log("Tong fibonacci la :" + sum);
