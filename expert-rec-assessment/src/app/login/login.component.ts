import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  
  token!: NbAuthOAuth2Token;
  private destroy$ = new Subject<void>();
  constructor(private authService: NbAuthService){}

  login(): void {
    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



 

}
