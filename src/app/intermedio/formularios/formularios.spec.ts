import { FormBuilder } from '@angular/forms';
import { formularioRegister } from './formularios';

describe('Formularios', () => {
  let componente: formularioRegister;

  beforeEach(() => {
    componente = new formularioRegister(new FormBuilder());
  });

  it('Debe crear un formulario con 2 campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
  // it('', () => {});
  // it('', () => {});
});
