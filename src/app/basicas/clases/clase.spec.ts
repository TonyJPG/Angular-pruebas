import { Jugador } from './clase';
describe('Pruebas de clase', () => {
  let jugador = new Jugador();

  // beforeAll();

  beforeEach(() => {
    jugador = new Jugador();
  });

  // afterAll();

  // afterEach();

  it('Debe retornar 100 hp, si recibe 0 de daño', () => {
    const resp = jugador.recibeDano(0);
    expect(resp).toBe(100);
  });

  it('Debe retornar 80 hp, si recibe 20 de daño', () => {
    const resp = jugador.recibeDano(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 hp, si recibe 50 de daño', () => {
    const resp = jugador.recibeDano(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 hp, si recibe 100 de daño', () => {
    const resp = jugador.recibeDano(100);
    expect(resp).toBe(0);
  });

  it('Debe retornar 0 hp, si recibe  más de 100 de daño', () => {
    const resp = jugador.recibeDano(300);
    expect(resp).toBe(0);
  });
});
