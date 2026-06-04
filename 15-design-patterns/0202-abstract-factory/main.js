class DarkFactory {
  createButton() {
    return { label: "dark-button" };
  }
  createCheckbox() {
    return { label: "dark-checkbox" };
  }
}

const factory = new DarkFactory();
const button = factory.createButton();
const checkbox = factory.createCheckbox();
console.log(`${button.label} ${checkbox.label}`);
