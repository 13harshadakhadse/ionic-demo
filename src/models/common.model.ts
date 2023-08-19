export type User = {
    id: string;
    mobileNumber: number;
    isAdmin: boolean;
    isLoggedIn: boolean;
    createdDate: string;
}

export type SideMenu = {
    id: string;
    image: string;
    name: string;
    routerLink: string;
    isShowBottomBorder: boolean;
    createdDate: string;
    updatedDate: string | null;
}

export type Category = {
    id: string;
    image: string;
    name: string;
    backgroundColor: string | null;
    hasProducts: boolean;
    createdDate: string;
    updatedDate: string | null;
}

export type Slider = {
    id: string;
    image: string;
    createdDate: string;
    updatedDate: string | null;
}

export type GridHeaders = {
    id: string;
    displayName: string;
    columnName: string;
    isSort: boolean;
    isFilter: boolean;
    // colSize: string | null;
    // colSpan: string | null;
    // cssClass: string | null;
    // cssStyle: string | null;
}

// export type GridData = {
//     id: string;
//     column: string;
//     value: string; 
// }

export type GridDetails = {
    gridName: string;
    gridHeaders: GridHeaders[],
    gridData: any
}

export type CustomerDetail = {
    id: string;
    customerName: string | null;
    mobileNumber: string;
    addresses: Address[];
    totalAddresses: number;
    orders: Order[];
    totalOrders: number;
    totalBilling: string;
}

export type AddressList = {
    addresses: Address[],
    totalAddresses: number;
}

export type Address = {
    id: string;
    customerNameForAddress: string;
    address: string;
    orderCount: string;
    createdDate: string;
    createdBy: string | null;
    updatedDate: string;
}

export type OrderList = {
    orders: Order[],
    totalOrders: number;
}

export type Order = {
    id: string;
    order: orderedProducts[];
    orderString: string;
    price: string;
    status: string;
    totalPay: string;
    createdDate: string;
    createdBy: string | null;
    updatedDate: string;
}

export type ViewOrderDetail = {
    id: string;
    order: orderedProducts[];
    orderString: string;
    couponCode: string;
    isAppliedCode: boolean;
    price: string;
    status: string;
    addressId: string;
    paymentMethod: string;
    totalPay: string;
    savedMoney: string;
    handlingFee: string;
    deliveryPartnerFee: string;
    createdDate: string;
    createdBy: string | null;
    updatedDate: string;
}

export type orderedProducts = {
    id: string;
    productName: string;
    quantity: string;
    pricePerProduct: string;
    discountOnProduct: string;
}