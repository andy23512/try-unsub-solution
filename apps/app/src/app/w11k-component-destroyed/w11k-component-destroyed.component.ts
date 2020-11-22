import { BaseComponentComponent } from './../base-component/base-component.component';
import { Component, OnInit } from '@angular/core';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'try-unsub-solution-w11k-component-destroyed',
  templateUrl: '../base-component/base-component.component.html',
})
export class W11kComponentDestroyedComponent extends BaseComponentComponent
  implements OnInit {
  public name = 'w11k-component-destroyed';

  ngOnInit(): void {
    this.interval$
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => this.log(v));
  }
}
