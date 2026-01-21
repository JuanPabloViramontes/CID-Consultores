import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userKey = 'user';

  login(user: any) {
    if (!user) return; // ⛔ evita guardar undefined
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.userKey);
  }

  getUser() {
    const user = localStorage.getItem(this.userKey);

    if (!user || user === 'undefined') {
      return null;
    }

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}
