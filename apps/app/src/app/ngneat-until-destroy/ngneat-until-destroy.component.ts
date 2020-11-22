import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'try-unsub-solution-ngneat-until-destroy',
  templateUrl: '../base-component/base-component.component.html',
})
export class NgneatUntilDestroyComponent extends BaseComponentComponent
  implements OnInit {
  public name = 'ngneat-until-destroy';
  ngOnInit(): void {
    this.interval$.pipe(untilDestroyed(this)).subscribe((v) => this.log(v));
  }
}
