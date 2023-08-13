import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GridDetails } from "src/models/common.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerDetailsService {

    constructor(private http: HttpClient) { }

    getCustomerGridDetails(): Observable<GridDetails> {
        return of<GridDetails>({
            gridName: 'CustomerDetailsGrid',
            gridHeaders: [
                // { id: '0', displayName: 'Mobile Number', columnName: 'mobileNumber', isSort: false, isFilter: false },
                // { id: '1', displayName: 'Active Status', columnName: 'isActive', isSort: false, isFilter: false }
                { id: '1', columnName: 'id', displayName: 'No.', isSort: false, isFilter: false },
                { id: '2', columnName: 'mobileNumber', displayName: 'Mobile Number', isSort: true, isFilter: false },
                { id: '3', columnName: 'isActive', displayName: 'Status', isSort: true, isFilter: false }
            ],
            gridData: [
                { id: '1', mobileNumber: '9819976774', isActive: true },
                { id: '2', mobileNumber: '9819976871', isActive: false },
                { id: '3', mobileNumber: '9819976869', isActive: false },
                { id: '4', mobileNumber: '9819976872', isActive: true },
                { id: '5', mobileNumber: '9819976873', isActive: true },
                { id: '6', mobileNumber: '9819976879', isActive: true },
                { id: '7', mobileNumber: '9819976870', isActive: true }
            ]
        });

        // id: string;
        // displayName: string;
        // columnName: string;
        // isSort: boolean;
        // isFilter: boolean;
        // return this.http.get<Array<SideMenu>>(`category/getCategories/${isAdmin}`);
    }
}
