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

export function throttle(callback: Function, freq: number) {
  let wait: boolean = false;
  let lastFn: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
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
