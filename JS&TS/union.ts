function printId(id: number | string) {
  console.log(id.toFixed(2)); // 报错，string 没有 toFixed
  if (typeof id === "number") {
    console.log(id.toFixed(2)); // 类型缩小后安全访问
  } else {
    console.log(id.toUpperCase()); // 这里 id 被缩小为 string
  }
}

printId("123"); 

