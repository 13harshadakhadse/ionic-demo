import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { User } from 'src/models/common.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  swiperModules = [IonicSlides];
  userDetail: User | null = null;
  slideImages: any[] = [
    { image: "../../assets/images/login/LoginBanner.jpg" },
    { image: "../../assets/images/home/banner/Carousal.jpg" },
    { image: "../../assets/images/login/LoginBanner.jpg" }
  ];

  categories: any[] = [
    { image: '../../assets/images/home/categories/Vegetables.png', label: 'Vegetables' },
    { image: '../../assets/images/home/categories/ColdDrink.png', label: 'Cold Drinks & Juices' },
    { image: '../../assets/images/home/categories/Fruits.png', label: 'Fruits' },
    { image: '../../assets/images/home/categories/FrozenFood.png', label: 'Instant & Frozen Food' },
    { image: '../../assets/images/home/categories/Dairy.png', label: 'Dairy' },
    { image: '../../assets/images/home/categories/Masala.png', label: 'Masala & Oil' },
    { image: '../../assets/images/home/categories/Snacks.png', label: 'Snacks' },
    { image: 'https://ionicframework.com/docs/img/demos/card-media.png', label: 'Dummy' },
    { image: 'https://ionicframework.com/docs/img/demos/card-media.png', label: 'Dummy' }
  ];

  sideMenus: any [] = [
    { image: '../../assets/images/home/sideMenu/customerDetails.png', name: 'Customer Details', routerLink: '', isShowBottomBorder: false },
    { image: '../../assets/images/home/sideMenu/products.png', name: 'Products', routerLink: '', isShowBottomBorder: false },
    { image: '../../assets/images/home/sideMenu/myAddresses.png', name: 'My Addresses', routerLink: '', isShowBottomBorder: false },
    { image: '../../assets/images/home/sideMenu/myOrders.png', name: 'My Orders', routerLink: '', isShowBottomBorder: true },
    { image: '../../assets/images/home/sideMenu/customerSupport.png', name: 'Customer Support', routerLink: '', isShowBottomBorder: false },
    // { image: '../../assets/images/home/sideMenu/customerSupport.png', name: 'Customer Help', routerLink: '', isShowBottomBorder: false },
    { image: '../../assets/images/home/sideMenu/logout.png', name: 'Logout', routerLink: '', isShowBottomBorder: false }
  ];

  constructor(private _userService: UserService) {
    this.userDetail = this._userService.userDetail;
    // if (this.userDetail)
    // this.userDetail.isLoggedIn = true;
  }

  ngOnInit(): void {
  }

  searchInput(event: any) {
    const searchText = event.target.value.toLowerCase();
    // this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    console.log(searchText);
  }


  ngOnDestroy(): void {
  }

}
