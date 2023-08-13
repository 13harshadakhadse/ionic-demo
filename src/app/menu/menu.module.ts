import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { MenuRoutingModule } from './menu-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
// import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    // CdkTableModule,
    MatSortModule
  ],
  declarations: [MenuComponent, CustomerDetailsComponent, LogoutComponent],
  schemas: []
})
export class MenuModule {}
