import { randomKey, throttle } from "../src/function";

jest.useFakeTimers();

describe("Test para verficiar las funciones", () => {
  test("Generar una llave random", () => {
    const key = randomKey();
    expect(key.length).toBe(6);
  });

  test("Llamar funcion randomThrottle", () => {
    const callback = jest.fn();
    const throttleF = throttle(callback, 1000);
    throttleF();
    setTimeout(() => throttleF(), 500);
    setTimeout(() => throttleF(), 1000);
    setTimeout(() => throttleF(), 1500);

    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });
  // test("Generar un error en el test", () => {
  //   const callback = jest.fn();
  //   const throttleF = throttle(callback, 1000);
  //   throttleF();
  //   setTimeout(() => throttleF(), 500);
  //   setTimeout(() => throttleF(), 1000);
  //   setTimeout(() => throttleF(), 1500);

  //   jest.runAllTimers();
  //   expect(callback).toHaveBeenCalledTimes(1);
  // });
});
