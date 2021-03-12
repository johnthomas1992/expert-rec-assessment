import { UserServiceService } from './../user-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbAuthJWTToken } from '@nebular/auth';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  user!: User;
  token!: NbAuthOAuth2Token;
  private destroy$ = new Subject<void>();

  constructor(private authService: NbAuthService, private userService: UserServiceService){ }

  login(): void {
    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        console.log('logged in');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



 

}
