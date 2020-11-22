import { BaseComponentComponent } from './../base-component/base-component.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'try-unsub-solution-unsubscribe-method',
  templateUrl: '../base-component/base-component.component.html',
})
export class UnsubscribeMethodComponent extends BaseComponentComponent
  implements OnInit, OnDestroy {
  public name = 'unsubscribe-method';
  public subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(this.interval$.subscribe((v) => this.log(v)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
