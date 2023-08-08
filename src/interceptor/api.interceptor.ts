import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/service/common.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private _commonService: CommonService) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request).pipe(
            tap({
                next: (event) => {
                    if (event instanceof HttpResponse) {
                        if (event.status == 401) {
                            console.log('Unauthorized access!');
                            return throwError(() => new Error('Unauthorized access!'));
                        }
                    }
                    return event;
                },
                error: (error) => {
                    let errMsg = null;
                    switch(error.status) {
                        case 401:
                            errMsg = 'Unauthorized access!'; 
                            console.log(error.message);
                            break;
                        case 404:
                            errMsg = 'Page Not Found!'; 
                            console.log(error.message);
                            break;
                        default:
                            errMsg = 'Something bad happened; please try again later.'; 
                            console.log(error.message);
                            break;
                    }
                    this._commonService.openToaster(errMsg);

                    // return throwError(() => new Error('Something bad happened; please try again later.'));
                }
            })
        );
    }
}