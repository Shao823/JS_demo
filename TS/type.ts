// TypeScript 代码
let nums: number[] = [1, 2, 3];
nums.push("hello"); // 编译时报错，但 JS 能运行

let pair: [string, number] = ["age", 18];
pair.push(true);

const point = [10, 20] as const; // 定义为只读数组
point.push(30); // 报错：只读

let n: number = undefined; // TS 报错，JS 运行正常

