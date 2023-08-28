import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsGalleryComponent } from './rentals-gallery.component';

describe('RentalsGalleryComponent', () => {
  let component: RentalsGalleryComponent;
  let fixture: ComponentFixture<RentalsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalsGalleryComponent]
    });
    fixture = TestBed.createComponent(RentalsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
