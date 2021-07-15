import { Jugador2 } from './jugador2';
describe('Pruebas de jugador 2 Emit', () => {
  let jugador: Jugador2;

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.recibeDano(1000);

    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.recibeDano(90);

    expect(nuevoHP).toBe(10);
  });
});
