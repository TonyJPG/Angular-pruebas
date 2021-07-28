import { from, of } from 'rxjs';

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;

  const spy = jasmine.createSpyObj({ get: of({}) });
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
});
