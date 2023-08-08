import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "src/models/common.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // userDetail: User | null = {
    //     id: '0',
    //     mobileNumber: 9819976874,
    //     isAdmin: true,
    //     isLoggedIn: true,
    //     createdDate: new Date().toString()
    // };

    userDetail$ = new BehaviorSubject<User | null>(null);

    constructor(private http: HttpClient) { }

    getUserDetail(phoneNumber: number): Observable<User> {
        return of({
            id: '0',
            mobileNumber: 9819976874,
            isAdmin: true,
            isLoggedIn: true,
            createdDate: new Date().toString()
        });
        
        //   return this.http.get<Array<User>>(`user/getUserDetail/${phoneNumber}`);
    }
}
