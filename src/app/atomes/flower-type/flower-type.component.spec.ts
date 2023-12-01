import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerTypeComponent } from './flower-type.component';

describe('FlowerTypeComponent', () => {
  let component: FlowerTypeComponent;
  let fixture: ComponentFixture<FlowerTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerTypeComponent]
    });
    fixture = TestBed.createComponent(FlowerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
