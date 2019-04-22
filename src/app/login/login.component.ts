
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State} from '../reducers/index';
import { AuthService } from './../_services/auth/auth.service';
import { MyErrorStateMatcher } from '../_shared/errormatcher';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  userLoggedIn;
  hasStyle;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public mediaObserver: MediaObserver,
    private store: Store<State>) {

      this.userLoggedIn = this.authService.hasCurrentSession();
      mediaObserver.media$.subscribe(res => {
        console.log(res.mqAlias);
        if (res.mqAlias === 'xs' || res.mqAlias === 'sm') {
          this.hasStyle = true;
        } else {
          this.hasStyle = false;
        }
      });
    }

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    userPassword: ['', [Validators.required]]
  });




  ngOnInit() {
  }


  loginSubmit(form: NgForm) {

  //  console.log(this.userInfo.getValue());
  }

  userNameChanged() {
    console.log('userName changed');
    console.log(this.loginForm.value.email);
 // this.store.dispatch( new userActions.ChangeUserName(this.loginForm.value.userName));
  }


}
