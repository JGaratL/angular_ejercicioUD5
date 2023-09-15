import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoFormularioComponent } from './dialogo-formulario.component';

describe('DialogoFormularioComponent', () => {
  let component: DialogoFormularioComponent;
  let fixture: ComponentFixture<DialogoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
