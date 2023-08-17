import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OrderList } from 'src/models/common.model';
import { CustomerDetailsService } from 'src/service/customer.details.service';
import { UserService } from 'src/service/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {

  private sub: SubSink = new SubSink();
  @Input() isCalledFromCustomerDetail: boolean = false;

  data: OrderList = { orders: [], totalOrders: 0 };
  isLoadAllOrders: boolean = false;
  userDetails: any;

  constructor(private _customerDetailsService: CustomerDetailsService,
    private _userService: UserService) {
    this.sub.sink = this._userService.userDetail$.subscribe(x => this.userDetails = x);
  }

  ngOnInit() {
    this.sub.sink = this._customerDetailsService.getCustomerOrdersByMobileNumber(this.userDetails?.mobileNumber).subscribe(x => {
      this.data = x;
    });
  }

  loadMoreOrders() {
    this.sub.sink = this._customerDetailsService.getCustomerAllOrdersByMobileNumber(this.userDetails?.mobileNumber).subscribe(x => {
      this.data.orders = [...this.data.orders, ...x.orders];
      this.isLoadAllOrders = true;
    });
  }

  trackByOrder(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
