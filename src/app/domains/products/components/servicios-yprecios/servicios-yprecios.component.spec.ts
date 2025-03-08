import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosYPreciosComponent } from './servicios-yprecios.component';

describe('ServiciosYPreciosComponent', () => {
  let component: ServiciosYPreciosComponent;
  let fixture: ComponentFixture<ServiciosYPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosYPreciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosYPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
