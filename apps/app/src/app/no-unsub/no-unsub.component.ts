import { BaseComponentComponent } from './../base-component/base-component.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'try-unsub-solution-no-unsub',
  templateUrl: '../base-component/base-component.component.html',
})
export class NoUnsubComponent extends BaseComponentComponent implements OnInit {
  public name = 'no-unsub';

  public ngOnInit(): void {
    this.interval$.subscribe((v) => this.log(v));
  }
}
