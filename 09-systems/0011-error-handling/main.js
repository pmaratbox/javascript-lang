function divide(a, b) {
    if (b === 0) {
        throw new Error("division by zero");
    }
    return a / b;
}

console.log(`10 / 2 = ${divide(10, 2)}`);

try {
    divide(10, 0);
} catch (e) {
    console.log(`error: ${e.message}`);
}
