import { BaseComponentComponent } from './../base-component/base-component.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'try-unsub-solution-notifier-subject',
  templateUrl: '../base-component/base-component.component.html',
})
export class NotifierSubjectComponent extends BaseComponentComponent
  implements OnInit, OnDestroy {
  public name = 'notifier-subject';
  public notifier = new Subject();
  ngOnInit(): void {
    this.interval$.pipe(takeUntil(this.notifier)).subscribe((v) => this.log(v));
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
