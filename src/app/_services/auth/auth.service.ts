import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hasUser;

  constructor() {
    console.log('wtf');
  }


 hasCurrentSession() {
    const user = localStorage.getItem('user');
    console.log(user);
    return false;
 }






}
