import { GoogleAccountDetails, User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }
  userDetails!: GoogleAccountDetails;

  getUserDetails(): any {
    return this.userDetails;
  }
  getUserGoogleAccountDetails(accessToken: string): Observable<any>{
   return this.http.get<GoogleAccountDetails>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`);
  }
}
