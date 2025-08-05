function getData(): any {
  return { name: "Alice" };
}

const user = getData();
console.log(user.age.toFixed(2)); // 编译不报错，运行时出错：Cannot read property 'toFixed' of undefined
