import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerTypeListComponent } from './flower-type-list.component';

describe('FlowerTypeListComponent', () => {
  let component: FlowerTypeListComponent;
  let fixture: ComponentFixture<FlowerTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerTypeListComponent]
    });
    fixture = TestBed.createComponent(FlowerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
