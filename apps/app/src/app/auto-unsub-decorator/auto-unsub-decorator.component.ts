import { BaseComponentComponent } from './../base-component/base-component.component';
import { Component, OnInit } from '@angular/core';

export function AutoUnsub() {
  return function (constructor: any) {
    const orig = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const prop of Object.keys(this)) {
        const property = this[prop];
        if (typeof property.subscribe === 'function') {
          property.unsubscribe();
        }
      }
      orig.apply();
    };
  };
}

@Component({
  selector: 'try-unsub-solution-auto-unsub-decorator',
  templateUrl: '../base-component/base-component.component.html',
})
@AutoUnsub()
export class AutoUnsubDecoratorComponent extends BaseComponentComponent
  implements OnInit {
  public name = 'auto-unsub-decorator';
  ngOnInit(): void {
    this.interval$.subscribe((v) => this.log(v));
  }
}
