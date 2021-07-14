import { Jugador } from './clase';
describe('Pruebas de clase', () => {
  const jugador = new Jugador();

  // beforeAll();
  // beforeEach();
  // afterAll();
  // afterEach();

  it('Debe retornar 80 hp, si recibe 20 de daño', () => {
    const resp = jugador.recibeDano(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 hp, si recibe 50 de daño', () => {
    const resp = jugador.recibeDano(50);
    expect(resp).toBe(50);
  });
});
