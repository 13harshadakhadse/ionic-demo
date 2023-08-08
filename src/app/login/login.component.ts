import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERN_CONSTANT } from 'src/constant/string.constant';
import { UserService } from 'src/service/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit, OnDestroy {

  private sub = new SubSink();
  mobileNumberCL: FormControl;

  constructor(private route: Router, 
              private _userService: UserService) {
    this.mobileNumberCL = new FormControl('', [Validators.required, Validators.pattern(PATTERN_CONSTANT.MobileNumber)]);
  }

  ngOnInit() {}

  getOTP() {
    if (this.mobileNumberCL.valid) {
      this.sub.sink = this._userService.getUserDetail(this.mobileNumberCL.value).subscribe(user => {
        this._userService.userDetail$.next(user);
      },
      () => {},
      () => {
        this.route.navigate(['/otp']);
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
