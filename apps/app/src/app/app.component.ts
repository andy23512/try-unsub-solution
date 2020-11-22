import { Component } from '@angular/core';

@Component({
  selector: 'try-unsub-solution-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public show = true;

  public toggleShow() {
    this.show = !this.show;
  }
}
