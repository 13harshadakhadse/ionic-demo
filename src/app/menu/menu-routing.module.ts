import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LogoutComponent } from './logout/logout.component';

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
export class MenuRoutingModule {}
