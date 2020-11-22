import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnsubComponent } from './no-unsub.component';

describe('NoUnsubComponent', () => {
  let component: NoUnsubComponent;
  let fixture: ComponentFixture<NoUnsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUnsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUnsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
