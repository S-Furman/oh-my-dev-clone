import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorBlackComponent } from './anchor-black.component';

describe('AnchorBlackComponent', () => {
  let component: AnchorBlackComponent;
  let fixture: ComponentFixture<AnchorBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorBlackComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
