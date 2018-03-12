import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private tokenKey = 'x-access-token';

  constructor() {}
  isTokenSet() {
    return !!localStorage[this.tokenKey];
  }

  getToken() {
    if (this.isTokenSet()) {
      return localStorage[this.tokenKey];
    } else {
      return false;
    }
  }

  setToken(token) {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  removeToken() {
    if (this.isTokenSet()) {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
