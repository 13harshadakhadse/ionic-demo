import { Component, OnDestroy, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { forkJoin, map } from 'rxjs';
import { SideMenu, User } from 'src/models/common.model';
import { CategoryService } from 'src/service/category.service';
import { CommonService } from 'src/service/common.service';
import { MenuService } from 'src/service/menu.service';
import { UserService } from 'src/service/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private sub = new SubSink();
  swiperModules = [IonicSlides];
  userDetail: User | null = null;
  sideMenus: SideMenu[] = [];
  categories: any[] = [];
  categoriesCopy: any[] = [];
  sliders: any[] = [];

  constructor(private _userService: UserService,
    private _menuService: MenuService,
    private _categoryService: CategoryService,
    private _commonService: CommonService,
    private _route: Router,
    private _activated: ActivatedRoute) {
    this.sub.sink = this._userService.userDetail$.subscribe(x => {
      this.userDetail = x
    });
  }

  ngOnInit(): void {

    this.sub.sink = forkJoin([
      this._menuService.getSideMenus(this.userDetail?.isAdmin),
      this._categoryService.getCategories(),
      this._categoryService.getSliders()
    ]).pipe(
      map(([menus, cat, slider]) => ({
        menus,
        cat,
        slider
      }))
    ).subscribe(x => {
      this.sideMenus = x.menus;
      this.categories = x.cat;
      this.sliders = x.slider;
    },
      () => {},
      () => {
        this.categoriesCopy = this._commonService.copyObject(this.categories);
      });
  }

  searchInput(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.categories = (!!searchText) ? this.categoriesCopy.filter((d) => d.toLowerCase().indexOf(searchText) > -1) : this.categories;
  }

  routeToCategoryProducts() {
    this._route.navigate(['category-product'], { relativeTo: this._activated })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
