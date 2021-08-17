import { from, of, EMPTY, throwError } from 'rxjs';

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent (espias)', () => {
  let componente: MedicosComponent;

  const spy = jasmine.createSpyObj('HttpClient', { get: of({}) });
  const servicio = new MedicosService(spy);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake((): any => {
      return from([medicos]);
    });

    componente.ngOnInit();
    expect(componente.medicos?.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar a un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return EMPTY;
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    const espia = spyOn(servicio, 'agregarMedico').and.returnValue(
      from([medico])
    );

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar al médico';

    const espia = spyOn(servicio, 'agregarMedico').and.returnValue(
      throwError(miError)
    );

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar a un médico', () => {
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(true);

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar a un médico', () => {
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false);

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
