import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AddressList, CustomerDetail, GridDetails, OrderList } from "src/models/common.model";

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
                { id: '2', columnName: 'address', displayName: 'Address', isSort: false, isFilter: false },
                { id: '3', columnName: 'isActive', displayName: 'Status', isSort: true, isFilter: false }
            ],
            gridData: [
                { id: '1', mobileNumber: '9819976774', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '2', mobileNumber: '9819976871', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '3', mobileNumber: '9819976869', address: '68 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '4', mobileNumber: '9819976872', address: '65 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '5', mobileNumber: '9819976873', address: '64 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '6', mobileNumber: '9819976879', address: '62 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '7', mobileNumber: '9819976870', address: '61 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },

                { id: '1', mobileNumber: '9819976774', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '2', mobileNumber: '9819976871', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '3', mobileNumber: '9819976869', address: '68 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '4', mobileNumber: '9819976872', address: '65 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '5', mobileNumber: '9819976873', address: '64 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '6', mobileNumber: '9819976879', address: '62 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '7', mobileNumber: '9819976870', address: '61 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },

                { id: '1', mobileNumber: '9819976774', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '2', mobileNumber: '9819976871', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '3', mobileNumber: '9819976869', address: '68 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: false },
                { id: '4', mobileNumber: '9819976872', address: '65 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '5', mobileNumber: '9819976873', address: '64 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '6', mobileNumber: '9819976879', address: '62 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true },
                { id: '7', mobileNumber: '9819976870', address: '61 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', isActive: true }
            ]
        });

        // id: string;
        // displayName: string;
        // columnName: string;
        // isSort: boolean;
        // isFilter: boolean;
        // return this.http.get<Array<SideMenu>>(`category/getCategories/${isAdmin}`);
    }

    getCustomerDetailByMobileNumber(number: number): Observable<CustomerDetail> {
        return of<CustomerDetail>({
            id: '0',
            customerName: 'Pramod More',
            mobileNumber: '9819976800',
            addresses: [
                { id: '0', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '1', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Vishal Bambarkar', orderCount: '5', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalAddresses: 10,
            orders: [
                { id: '0', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '1', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.150', status: 'Delivered', totalPay: 'Rs.150', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalOrders: 50,
            totalBilling: 'Rs.1000'
        });
    };

    getCustomerAddressesByMobileNumber(number: number): Observable<AddressList> {
        return of<AddressList>({
            addresses: [
                { id: '0', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '1', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '1', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Vishal Bambarkar', orderCount: '5', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalAddresses: 10
        });
    }

    getCustomerAllAddressesByMobileNumber(number: number): Observable<AddressList> {
        return of<AddressList>({
            addresses: [
                { id: '2', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '3', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '4', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '5', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '6', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '7', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '8', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '9', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '10', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '12', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '13', address: '69 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '14', address: '67 / Currimji Bldg. M N Koli Marg Mandvi, Mumbai,Mumbai,400003,India', customerNameForAddress: 'Pramod More', orderCount: '5',  createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalAddresses: 10
        });
    }

    getCustomerOrdersByMobileNumber(number: number): Observable<OrderList> {
        return of<OrderList>({
            orders: [
                { id: '0', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '1', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.150', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalOrders: 50
        });
    }

    // id: string;
    // order: orderedProducts[];
    // orderString: string;
    // couponCode: string;
    // isAppliedCode: boolean;
    // price: string;
    // status: string;
    // addressId: string;
    // paymentMethod: string;
    // totalPay: string;
    // savedMoney: string;
    // handlingFee: string;
    // deliveryPartnerFee: string;
    // createdDate: string;
    // createdBy: string | null;
    // updatedDate: string;

    getCustomerAllOrdersByMobileNumber(number: number): Observable<OrderList> {
        return of<OrderList>({
            orders: [
                { id: '2', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '3', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '4', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '5', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '6', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '7', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '8', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '9', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '10', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '11', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '12', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '13', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '14', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() },
                { id: '15', order: [], orderString: '1Kg Batata, 2Kg Bhindi', price: 'Rs.100', status: 'Delivered', totalPay: 'Rs.100', createdDate: new Date().toString(), createdBy: 'Pramod More', updatedDate: new Date().toString() }
            ],
            totalOrders: 50
        });
    }
}
