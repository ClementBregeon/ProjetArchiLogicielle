import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduitsComponent } from './page-produits.component';

describe('PageProduitsComponent', () => {
  let component: PageProduitsComponent;
  let fixture: ComponentFixture<PageProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProduitsComponent]
    });
    fixture = TestBed.createComponent(PageProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
