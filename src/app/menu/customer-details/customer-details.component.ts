import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GridHeaders } from 'src/models/common.model';
import { CustomerDetailsService } from 'src/service/customer.details.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  private sub: SubSink = new SubSink();
  // gridDetails: any;
  // columns = [
  //   { id: '1', columnName: 'id', displayName: 'No.', isSort: false, isFilter: false },
  //   { id: '2', columnName: 'mobileNumber', displayName: 'Mobile Number', isSort: true, isFilter: false },
  //   { id: '3', columnName: 'isActive', displayName: 'Active', isSort: true, isFilter: false }
  // ];
  // displayedColumns = this.columns.map(c => c.columnName);
  // dataSource = new MatTableDataSource<any>([
  //   { id: 1, mobileNumber: 'Hydrogen', isActive: true },
  //   { id: 2, mobileNumber: 'Helium', isActive: false },
  //   { id: 3, mobileNumber: 'Lithium', isActive: false },
  //   { id: 4, mobileNumber: 'Beryllium', isActive: true },
  //   { id: 5, mobileNumber: 'Boron', isActive: true },
  //   { id: 6, mobileNumber: 'Carbon', isActive: true },
  //   { id: 7, mobileNumber: 'Nitrogen', isActive: true }
  // ]);
  columns: GridHeaders[] = [];
  displayedColumns: any;
  dataSource: any;
  isLoad: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _customerDetailsDervice: CustomerDetailsService) { }

  ngOnInit() {
    this.sub.sink = this._customerDetailsDervice.getCustomerGridDetails().subscribe(x => {
      this.dataSource = new MatTableDataSource<any>(x.gridData);
      this.displayedColumns = x.gridHeaders.map(y => y.columnName);
      this.columns = x.gridHeaders;
      this.isLoad = true;
    });
  }

  sortChange(sortState: Sort) {
    // if (sortState.direction === 'asc') {
    //   this.dataSource.data = this.dataSource.data.sort((a, b) => a[sortState.active].localeCompare(b[sortState.active]));
    // } else if (sortState.direction === 'desc') {
    //   this.dataSource.data = this.dataSource.data.sort((a, b) => b[sortState.active].localeCompare(a[sortState.active]));
    // } else {
    //   this.dataSource.data = this.dataSource.data;
    // }

    // console.log(sortState, this.dataSource);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    // console.log('this.paginator', this.paginator);
    // this.paginator.page.subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
