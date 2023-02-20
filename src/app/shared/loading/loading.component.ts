import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  styles: ['#loading-spinner{display: block;margin:auto;}'],
  template:'<ng-template><mat-spinner id="loading-spinner"></mat-spinner></ng-template>',

})
export class LoadingComponent {


}
