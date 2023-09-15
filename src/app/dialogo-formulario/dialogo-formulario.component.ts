import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialogo-formulario',
  templateUrl: './dialogo-formulario.component.html',
})
export class DialogoFormularioComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      nombre: [''],
      email: [''],
      direccion: [''],
    });
  }
}
