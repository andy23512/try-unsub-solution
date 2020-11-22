import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgneatUntilDestroyComponent } from './ngneat-until-destroy.component';

describe('NgneatUntilDestroyComponent', () => {
  let component: NgneatUntilDestroyComponent;
  let fixture: ComponentFixture<NgneatUntilDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgneatUntilDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgneatUntilDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
