export function randomKey(): string {
  const abc = "abcdefghijklmnopqrstuvyxwzABCEDEFGHIJKLMNOPQRSTUVYWXZ0123456789";
  const max = abc.length;
  function key(arg1: string, i: number) {
    if (i == 6) return arg1;
    const index = Math.floor(Math.random() * max);
    const letter = abc[index];
    arg1 += letter;
    return key(arg1, ++i);
  }

  try {
    return key("", 0);
  } catch (e) {
    return "ko";
  }
}

export function throttle<T extends (...args: Parameters<T>) => void>(
  callback: T,
  freq: number
) {
  let wait: boolean = false;
  let lastFn: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!wait) {
      clearTimeout(lastFn);
      callback.apply(this, args);
      wait = true;
      lastFn = setTimeout(() => {
        wait = false;
      }, freq);
    } else {
      console.log("throttled!");
    }
  };
}

//No funciona el front, sirve para provar su funcionalidad

const result = throttle(() => {
  const res = randomKey();
  console.log(res);
}, 2000);

result();
setTimeout(() => result(), 100);
setTimeout(() => result(), 2000);
setTimeout(() => result(), 2500);
