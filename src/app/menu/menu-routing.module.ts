import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [{
        path: 'customer-details',
        component: CustomerDetailsComponent
        // data: {title: 'Customer Details'}
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
