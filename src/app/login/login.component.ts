import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERN_CONSTANT } from 'src/constant/string.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit, OnDestroy {

  mobileNumberControl: any;
  constructor(private route: Router) {
    this.mobileNumberControl = new FormControl('', [Validators.required, Validators.pattern(PATTERN_CONSTANT.MobileNumber)]);
  }

  ngOnInit() {}

  getOTP() {
    if (this.mobileNumberControl.valid) {
      this.route.navigate(['/otp']);
    }
  }

  ngOnDestroy(): void {}

}
