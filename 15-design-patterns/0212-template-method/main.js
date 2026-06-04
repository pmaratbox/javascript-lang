class Algorithm {
  step() {
    throw new Error("not implemented");
  }
  run() {
    return ["start", this.step(), "end"].join(" ");
  }
}

class WorkAlgorithm extends Algorithm {
  step() {
    return "work";
  }
}

console.log(new WorkAlgorithm().run());
