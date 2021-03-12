import { Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthService, NbTokenLocalStorage, NbTokenService, NbTokenStorage } from '@nebular/auth';
import { GoogleAccountDetails, User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user!: GoogleAccountDetails;
  token!: NbAuthOAuth2Token;
  constructor(
    private userService: UserServiceService,
    private authService: NbAuthService,
    private tokenLocalStorageService: NbTokenStorage,
    private router: Router) {

    this.authService.onTokenChange()
    .subscribe((userToken) => {
      if (userToken.isValid()) {
        console.log('token valid');
        const user = userToken.getPayload();
        this.userService.getUserGoogleAccountDetails(user.access_token).subscribe(
          (userInfo: GoogleAccountDetails) => {
          this.user = userInfo;
          console.log( this.user);
         });
      }
    });
  }


  logout(): void {
    this.authService.logout('google').subscribe(data => {
      localStorage.removeItem('auth_app_token');
      this.tokenLocalStorageService.clear();
      this.router.navigate(['/login']);
    });
  }
}
