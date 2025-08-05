// 基本导出
export const PI = 3.14159;
export function add(x: number, y: number): number {
  return x + y;
}

// 命名导出
function square(x: number): number {
  return x * x;
}
function circle(r: number): number {
  return PI * r * r;
}
export { square, circle };

// 默认导出
function greet(name: string): string {
  return `Hello, ${name}!`;
}
export default greet;
