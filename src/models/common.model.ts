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