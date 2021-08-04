import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';

import { MedicoService } from './intermedio2/medico/medico.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [MedicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
