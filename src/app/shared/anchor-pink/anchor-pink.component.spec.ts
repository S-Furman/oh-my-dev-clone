import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorPinkComponent } from './anchor-pink.component';

describe('AnchorPinkComponent', () => {
  let component: AnchorPinkComponent;
  let fixture: ComponentFixture<AnchorPinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorPinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorPinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
