import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierSubjectComponent } from './notifier-subject.component';

describe('NotifierSubjectComponent', () => {
  let component: NotifierSubjectComponent;
  let fixture: ComponentFixture<NotifierSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
