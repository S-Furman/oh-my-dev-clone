import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPinkComponent } from './button-pink.component';

describe('ButtonPinkComponent', () => {
  let component: ButtonPinkComponent;
  let fixture: ComponentFixture<ButtonPinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
