import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
   RegistrationRoute: string = 'put_reg_route';
   LoginRoute: string = 'put_login_route';

  constructor(private http: HttpClient) {}

  registration(registrationForm: Credentials): Observable<any> {
    return this.http.post(this.RegistrationRoute, registrationForm);
  }

  login(loginData: Credentials): Observable<any> {
    return this.http.post(this.LoginRoute, loginData);
  }
}
