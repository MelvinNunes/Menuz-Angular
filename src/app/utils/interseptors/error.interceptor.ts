import { JwtService } from './../services/jwt.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private jwt: JwtService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
          } else if (error.status === 401) {
            this.router.navigate(['home']);
          } else if (error.status === 500) {
            this.router.navigate(['500']);
          } else if (error.status === 404) {
            this.router.navigate(['404']);
          }
          return throwError(error.error);
        })
      );
  }

}
