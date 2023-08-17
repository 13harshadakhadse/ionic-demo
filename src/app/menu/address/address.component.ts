import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AddressList } from 'src/models/common.model';
import { CustomerDetailsService } from 'src/service/customer.details.service';
import { UserService } from 'src/service/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {

  private sub: SubSink = new SubSink();

  @Input() isCalledFromCustomerDetail: boolean = false;

  data: AddressList = { addresses: [], totalAddresses: 0 };
  isLoadAllAddresses: boolean = false;
  userDetails: any;

  constructor(private _customerDetailsService: CustomerDetailsService,
    private _userService: UserService) {
    this.sub.sink = this._userService.userDetail$.subscribe(x => this.userDetails = x);
  }

  ngOnInit() {
    this.sub.sink = this._customerDetailsService.getCustomerAddressesByMobileNumber(this.userDetails?.mobileNumber).subscribe(x => {
      this.data = x;
    });
  }

  loadMoreAddresses() {
    this.sub.sink = this._customerDetailsService.getCustomerAllAddressesByMobileNumber(this.userDetails?.mobileNumber).subscribe(x => {
      this.data.addresses = [...this.data.addresses, ...x.addresses];
      this.isLoadAllAddresses = true;
    });
  }

  trackByAddress(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
