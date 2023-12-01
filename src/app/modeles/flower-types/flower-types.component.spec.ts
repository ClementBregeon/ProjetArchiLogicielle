import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerTypesComponent } from './flower-types.component';

describe('FlowerTypesComponent', () => {
  let component: FlowerTypesComponent;
  let fixture: ComponentFixture<FlowerTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerTypesComponent]
    });
    fixture = TestBed.createComponent(FlowerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
