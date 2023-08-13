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
                { id: '1', mobileNumber: 'Hydrogen', isActive: true },
                { id: '2', mobileNumber: 'Helium', isActive: false },
                { id: '3', mobileNumber: 'Lithium', isActive: false },
                { id: '4', mobileNumber: 'Beryllium', isActive: true },
                { id: '5', mobileNumber: 'Boron', isActive: true },
                { id: '6', mobileNumber: 'Carbon', isActive: true },
                { id: '7', mobileNumber: 'Nitrogen', isActive: true }
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
