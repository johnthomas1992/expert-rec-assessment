import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbPasswordAuthStrategy, NbAuthModule,
  NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbAuthJWTToken, NbAuthOAuth2JWTToken, NbOAuth2GrantType, NbOAuth2ClientAuthMethod } from '@nebular/auth';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '605188770291-im46gt7hm4phcboanq3842hvjq58cos6.apps.googleusercontent.com',
          clientSecret: 'sample',
          clientAuthMethod: NbOAuth2ClientAuthMethod.BASIC,
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4202/callback',
          },
        }),
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          }}),
      ],
      forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
