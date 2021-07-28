import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {
  constructor(public httpClient: HttpClient) {}

  getMedicos() {
    return this.httpClient.get('...').pipe(map((resp: any) => resp['medicos']));
  }

  agregarMedico(medico: any) {
    return this.httpClient
      .post('...', medico)
      .pipe(map((resp: any) => resp['medico']));
  }

  borrarMedico(id: string) {
    return this.httpClient
      .delete('...')
      .pipe(map((resp: any) => resp['medico']));
  }
}
