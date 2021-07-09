import { mensaje } from './string';
describe('Pruebas de string', () => {
  it('Debe regresar un string', () => {
    const resp = mensaje('Tony');
    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un string que contiene el nombre enviado', () => {
    const nombre = 'Tony';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
