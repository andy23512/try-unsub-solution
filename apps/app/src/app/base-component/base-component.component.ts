import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'try-unsub-solution-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss'],
})
export class BaseComponentComponent extends OnDestroyMixin implements OnInit {
  public interval$ = interval(1000);
  public name = 'base';

  ngOnInit(): void {}

  public log(v) {
    console.log(this.name, v);
  }
}
