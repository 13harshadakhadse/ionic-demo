import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LogoutComponent } from './logout/logout.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'customer-details',
        component: CustomerDetailsComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
