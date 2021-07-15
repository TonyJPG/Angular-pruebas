import { obtenerRobots } from './arreglos';
describe('Pruebas de arreglos', () => {
  it('Debe retornar un arreglo', () => {
    const resp = obtenerRobots();
    expect(Array.isArray(resp)).toBe(true);
  });

  it('Debe retornar al menos tres robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  xit('Debe existir Mega Man y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('Mega Man');
    expect(resp).toContain('Ultron');
  });
});
