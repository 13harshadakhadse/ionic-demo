import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/models/common.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userDetail: User | null = {
        id: '0',
        mobileNumber: 9819976874,
        isAdmin: true,
        isLoggedIn: true,
        createdDate: new Date().toString()
    };

    constructor(private http: HttpClient) { }

    // getTodos(): Observable<Array<ITodo>> {
    //   return this.http.get<Array<ITodo>>(`${URL_PREFIX}/todos`,);
    // }
}
