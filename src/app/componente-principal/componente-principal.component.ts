import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoFormularioComponent } from '../dialogo-formulario/dialogo-formulario.component';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
})
export class ComponentePrincipalComponent {
  datosFormulario: any;

  constructor(public dialog: MatDialog) {}

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(DialogoFormularioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
      this.datosFormulario = result;
    });
  }
}
