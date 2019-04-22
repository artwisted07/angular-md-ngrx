import {Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError,  } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      setHeaders: {
       'Content-Type' : 'application/json;',
     },
     });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse, caught) => {
        // intercept the respons error and displace it to the console
       // console.log(error);
     /*   if (error.status === 401 || error.status === 403) {
          this.alertservice.showSessionTimeOut('Session Timed Out', 'success', 3000);
          setTimeout(() => { localStorage.removeItem('currentUser');
         this.router.navigate(['/login']);
        }
          , 3000);

        }*/

        return observableThrowError(error);
        })) as any;
  }
}
