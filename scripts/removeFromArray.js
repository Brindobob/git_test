const fruit = [
    "apple",
    "banana",
    "orange",
    "mango"
]

function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

console.log(fruit);
console.log(removeItem(fruit, "banana"))
