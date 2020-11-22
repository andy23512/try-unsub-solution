import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUnsubDecoratorComponent } from './auto-unsub-decorator.component';

describe('AutoUnsubDecoratorComponent', () => {
  let component: AutoUnsubDecoratorComponent;
  let fixture: ComponentFixture<AutoUnsubDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoUnsubDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUnsubDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
