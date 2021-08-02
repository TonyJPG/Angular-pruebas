import { from, of, EMPTY } from 'rxjs';

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
    console.log(componente.medicos);
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
});
