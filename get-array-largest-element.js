// get largest number using function and for loop
var price = [30, 395, 39, 21, 53, 848, 92];

function getLargestNum(numbers) {
    var store = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (store < element) {
            store = element;
        }
    }
    return store;
}
var result = getLargestNum(price);
console.log(result);


// get largest element using function and for of loop
/* var price = [30, 395, 39, 21, 53, 848, 92];

function getLargestNumber(numbers) {
    var store = numbers[0];
    for (var element of numbers) {
        if (store < element) {
            store = element;
        }
    }
    return store;
}
var result = getLargestNumber(price);
console.log(result);
 */


// get largest element using function and while loop

/* var price = [30, 395, 39, 21, 53, 848, 92];

function getLargestNum(numbers) {
    var store = numbers[0];
    var i = 0;
    while (i < numbers.length) {
        i++;
        var element = numbers[i];
        if (store < element) {
            store = element;
        }
    }
    return store;
}
var result = getLargestNum(price);
console.log(result); */