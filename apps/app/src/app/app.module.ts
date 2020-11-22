import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { NoUnsubComponent } from './no-unsub/no-unsub.component';
import { UnsubscribeMethodComponent } from './unsubscribe-method/unsubscribe-method.component';
import { NotifierSubjectComponent } from './notifier-subject/notifier-subject.component';
import { AutoUnsubDecoratorComponent } from './auto-unsub-decorator/auto-unsub-decorator.component';
import { W11kComponentDestroyedComponent } from './w11k-component-destroyed/w11k-component-destroyed.component';
import { NgneatUntilDestroyComponent } from './ngneat-until-destroy/ngneat-until-destroy.component';

@NgModule({
  declarations: [AppComponent, BaseComponentComponent, NoUnsubComponent, UnsubscribeMethodComponent, NotifierSubjectComponent, AutoUnsubDecoratorComponent, W11kComponentDestroyedComponent, NgneatUntilDestroyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
