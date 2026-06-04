const prototype = { value: 1 };

const clone = structuredClone(prototype);
clone.value = 2;

console.log(`${prototype.value} ${clone.value}`);
