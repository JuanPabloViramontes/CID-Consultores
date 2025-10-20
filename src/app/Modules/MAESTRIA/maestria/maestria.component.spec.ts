import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaComponent } from './maestria.component';

describe('MaestriaComponent', () => {
  let component: MaestriaComponent;
  let fixture: ComponentFixture<MaestriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaestriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
