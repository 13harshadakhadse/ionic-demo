import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { SubSink } from 'subsink/dist/subsink';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent  implements OnInit {

  private sub = new SubSink();

  constructor(
    private route: Router, 
    private _userService: UserService
  ) { }

  ngOnInit() {}
  

  moveFocus(event : any, nextElement : any, previousElement : any) {
    console.log(event.keyCode);
    if (event.keyCode === 8 && previousElement) {
      previousElement.setFocus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      event.path[0].value = '';
    }
  }

  goTODashboard()
  {
    this.route.navigate(['/home']);
  }

}
