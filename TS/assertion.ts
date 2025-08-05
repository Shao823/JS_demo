interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function makeNoise(animal: Cat | Dog) {
  // 错误断言：把 animal 断言成 Dog 类型，但传入的是 Cat
  (animal as Dog).bark();
}

const myCat: Cat = {
  meow() {
    console.log("喵喵");
  }
};

makeNoise(myCat); // 运行时错误：animal.bark is not a function
