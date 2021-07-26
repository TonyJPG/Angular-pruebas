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

  it('El email debe ser obligatorio', () => {
    const control = componente.form.get('email');

    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    }
  });

  it('El email debe ser un correo válido', () => {
    const control = componente.form.get('email');

    if (control) {
      control.setValue('tony@g.c');
      expect(control.valid).toBeTruthy();
    }
  });
});
