import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SideMenu } from "src/models/common.model";

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private http: HttpClient) { }

    getSideMenus(isAdmin: boolean = false): Observable<Array<SideMenu>> {
        return of<Array<SideMenu>>([
            { id: '0', image: '../../assets/images/home/sideMenu/customerDetails.png', name: 'Customer Details', routerLink: '/menu/customer-details', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '0', image: '../../assets/images/home/sideMenu/products.png', name: 'Products', routerLink: '', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '0', image: '../../assets/images/home/sideMenu/myAddresses.png', name: 'My Addresses', routerLink: '', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '0', image: '../../assets/images/home/sideMenu/myOrders.png', name: 'My Orders', routerLink: '', isShowBottomBorder: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '0', image: '../../assets/images/home/sideMenu/customerSupport.png', name: 'Customer Support', routerLink: '', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            // { id: '0', image: '../../assets/images/home/sideMenu/customerSupport.png', name: 'Customer Help', routerLink: '', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '0', image: '../../assets/images/home/sideMenu/logout.png', name: 'Logout', routerLink: '/menu/logout', isShowBottomBorder: false, createdDate: new Date().toString(), updatedDate: new Date().toString() }
        ]);

        // return this.http.get<Array<SideMenu>>(`menu/getSideMenus/${isAdmin}`);
    }
}
