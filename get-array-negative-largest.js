var numbers = [-32, -18, -10, -38, -2, -29];

function findLargestNum(numbers) {
    var store = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (store < element) {
            store = element;
        }
    }
    return store;
}
var result = findLargestNum(numbers);
console.log(result);