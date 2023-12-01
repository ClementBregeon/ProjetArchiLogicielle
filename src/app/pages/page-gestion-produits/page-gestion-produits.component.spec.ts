import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionProduitsComponent } from './page-gestion-produits.component';

describe('PageGestionProduitsComponent', () => {
  let component: PageGestionProduitsComponent;
  let fixture: ComponentFixture<PageGestionProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGestionProduitsComponent]
    });
    fixture = TestBed.createComponent(PageGestionProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
