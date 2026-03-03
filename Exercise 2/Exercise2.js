let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("Part 1: All Values");

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

console.log("Part 2: Skip Even Numbers");

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        continue;
    }

    console.log(array1[i]);
}


console.log("Part 3: Stop at 10");

for (let i = 0; i < array1.length; i++) {

    if (array1[i] === 10) {
        break;
    }

    console.log(array1[i]);
}