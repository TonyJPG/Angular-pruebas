import { incrementar } from './numbers';
describe('Pruebas de números', () => {
  it('Debe retornar 100 si el número ingresado es mayor a 100', () => {
    const resp = incrementar(300);
    expect(resp).toBe(100);
  });

  it('Debe retornar el número + 1, si el número ingresado es menor a 100', () => {
    const resp = incrementar(85);
    expect(resp).toBe(86);
  });
});
