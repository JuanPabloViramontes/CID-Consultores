import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiofrecuenciasComponent } from './biofrecuencias.component';

describe('BiofrecuenciasComponent', () => {
  let component: BiofrecuenciasComponent;
  let fixture: ComponentFixture<BiofrecuenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiofrecuenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiofrecuenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
