import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Category, SideMenu, Slider } from "src/models/common.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Array<Category>> {
        return of<Array<Category>>([
            { id: '0', image: '../../assets/images/home/categories/Vegetables.png', name: 'Vegetables', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '1', image: '../../assets/images/home/categories/ColdDrink.png', name: 'Cold Drinks & Juices', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '2', image: '../../assets/images/home/categories/Fruits.png', name: 'Fruits', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '3', image: '../../assets/images/home/categories/FrozenFood.png', name: 'Instant & Frozen Food', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '4', image: '../../assets/images/home/categories/Dairy.png', name: 'Dairy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '5', image: '../../assets/images/home/categories/Masala.png', name: 'Masala & Oil', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '6', image: '../../assets/images/home/categories/Snacks.png', name: 'Snacks', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '7', image: 'https://ionicframework.com/docs/img/demos/card-media.png', name: 'Dummy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '8', image: 'https://ionicframework.com/docs/img/demos/card-media.png', name: 'Dummy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() }
        ]);

        // return this.http.get<Array<SideMenu>>(`category/getCategories/${isAdmin}`);
    }

    // getCategoriesBySearchText(searchText: string = ''): Observable<Array<Category>> {
    //     return of<Array<Category>>([
    //         { id: '0', image: '../../assets/images/home/categories/Vegetables.png', name: 'Vegetables', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '1', image: '../../assets/images/home/categories/ColdDrink.png', name: 'Cold Drinks & Juices', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '2', image: '../../assets/images/home/categories/Fruits.png', name: 'Fruits', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '3', image: '../../assets/images/home/categories/FrozenFood.png', name: 'Instant & Frozen Food', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '4', image: '../../assets/images/home/categories/Dairy.png', name: 'Dairy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '5', image: '../../assets/images/home/categories/Masala.png', name: 'Masala & Oil', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '6', image: '../../assets/images/home/categories/Snacks.png', name: 'Snacks', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '7', image: 'https://ionicframework.com/docs/img/demos/card-media.png', name: 'Dummy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() },
    //         { id: '8', image: 'https://ionicframework.com/docs/img/demos/card-media.png', name: 'Dummy', backgroundColor: 'red', hasProducts: true, createdDate: new Date().toString(), updatedDate: new Date().toString() }
    //     ]);
    // }

    getSliders(): Observable<Array<Slider>> {
        return of([
            { id: '0', image: "../../assets/images/login/LoginBanner.jpg", createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '1', image: "../../assets/images/home/banner/Carousal.jpg", createdDate: new Date().toString(), updatedDate: new Date().toString() },
            { id: '2', image: "../../assets/images/login/LoginBanner.jpg", createdDate: new Date().toString(), updatedDate: new Date().toString() }
        ]);
    }
}
