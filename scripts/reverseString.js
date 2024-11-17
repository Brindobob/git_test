function reverseString(word) {
    const splitString = word.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    console.log(joinArray)
}

reverseString("computer")
