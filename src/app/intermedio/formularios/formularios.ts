import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class formularioRegister {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
