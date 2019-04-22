import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as userActions from './actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userInfo = new BehaviorSubject({});
// coidSelect: FormControl = new FormControl('', Validators.required);
  constructor() {

  }
}
