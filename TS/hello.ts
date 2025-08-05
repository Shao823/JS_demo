function greet(name: string): string {
  return `你好，${name}！`;
}

const userName: string = "小明";
console.log(greet(userName));
console.log(greet(undefined)); // 处理未定义的情况