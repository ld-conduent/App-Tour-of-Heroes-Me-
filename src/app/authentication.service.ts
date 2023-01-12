import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  private isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  isAuthenticated(): boolean {
    this.isLogged = true;

    return this.isLogged;
  }
}
