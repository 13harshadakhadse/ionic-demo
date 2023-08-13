import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private sub: SubSink = new SubSink();
  isDisplayHeader = false;

  constructor(private _activated: ActivatedRoute) {
    this.sub.sink = this._activated.queryParams.subscribe(data => {
      if (!!data && data['page'] != 'logout') {
        this.isDisplayHeader = true;
      }
    });
  }

  ngOnInit() { 
    this.sub.unsubscribe();
  }

}
