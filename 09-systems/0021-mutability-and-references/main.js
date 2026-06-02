function inc(box) {
  box.value++;
}

const box = { value: 1 };
console.log(`before: ${box.value}`);
inc(box);
console.log(`after: ${box.value}`);
