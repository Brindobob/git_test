const repeatString = function(word, num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result += word;
    }

    return result;
}

console.log(repeatString('joe', 8));