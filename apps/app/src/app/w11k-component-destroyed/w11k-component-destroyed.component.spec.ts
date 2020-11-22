import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W11kComponentDestroyedComponent } from './w11k-component-destroyed.component';

describe('W11kComponentDestroyedComponent', () => {
  let component: W11kComponentDestroyedComponent;
  let fixture: ComponentFixture<W11kComponentDestroyedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W11kComponentDestroyedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W11kComponentDestroyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
