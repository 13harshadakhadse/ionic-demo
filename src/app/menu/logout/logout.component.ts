import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit, OnDestroy {

  clearTimeOutRedirection: any;
  constructor(private _userService: UserService,
    private _route: Router) {
  }

  ngOnInit() {
    this._userService.userDetail$.next(null);
    this.clearTimeOutRedirection = setTimeout(() => {
      this._route.navigate(['']);
    }, 5000);
  }

  routeToLogin() {
    this._route.navigate(['']);
  }

  ngOnDestroy(): void {
    clearTimeout(this.clearTimeOutRedirection);
  }

}
