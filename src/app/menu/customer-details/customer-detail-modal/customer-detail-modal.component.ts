import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrls: ['./customer-detail-modal.component.scss'],
})
export class CustomerDetailModalComponent  implements OnInit {

  data: any;
  headerText: string = '';
  isShowClose: boolean = true;
  // isLoadAllAddresses: boolean = false;
  // isLoadAllOrders: boolean = false;

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.data, this.headerText, this.isShowClose);
  }

  // loadMoreAddresses() {
  //   //Api call pending to get all addresses
  //   this.isLoadAllAddresses = true;
  // }

  // loadMoreOrders() {
  //   //Api call pending to get all orders
  //   this.isLoadAllOrders = true;
  // }

  cancel() {
    return this._modalCtrl.dismiss(null, 'close');
  }
}
