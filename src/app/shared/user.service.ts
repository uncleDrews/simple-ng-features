import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './auth-token/token.service';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  USER_API = 'put_route_here';

  User: Observable<User>;
  private _user: BehaviorSubject<User>;
  private userStore: {
    user: User;
  };

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.userStore = { user: <User>{} };
    this._user = <BehaviorSubject<User>>new BehaviorSubject(null);
    this.User = this._user.asObservable();
    if (this.tokenService.isTokenSet()) {
      this.loadUserData().subscribe();
    }
  }

  loadUserData(): Observable<User> {
    return this.http.get(`${this.USER_API}`).map((data: User) => {
      if (!data.avatar) {
        data.avatar = '/assets/images/user-icon-placeholder.png';
      }
      this.userStore.user = data;
      this._user.next(Object.assign({}, this.userStore).user);
      return data;
    });
  }

  get user(): Observable<User> {
    return this._user.asObservable().filter((user) => !!user);
  }

  getAllCompanyAdmins(): Observable<any> {
    return this.http.get(`${this.USER_API}/company-admins`);
  }

  getAllUsersByCompany = (companyId?: string): Observable<any> => {
    if (companyId) {
      companyId = `companyId=${companyId}`;
    }
    return this.http.get(`${this.USER_API}/by-company?${companyId}`);
  }

  updateProfile(user): Observable<User> {
    return this.http.put(`${this.USER_API}/me`, user).switchMap(() => this.loadUserData());
  }
}
