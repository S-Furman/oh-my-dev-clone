import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create checkbox', () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector('input');
    expect(checkbox.type).toBe('checkbox');
  });
  it('should initialize checkbox unchecked', () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector('input');
    expect(checkbox.checked).toBeFalsy();
  });
});
