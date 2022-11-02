export function fib(v: number) {
  let a: number = 0;
  let b: number = 1;
  let _b: number = 0;
  let arr: Array<number> = [];

  while (v > 1) {
    v -= 1;
    arr.push(b);
    _b = b;
    b = a + b;
    a = _b;
  }

  return arr;
}
