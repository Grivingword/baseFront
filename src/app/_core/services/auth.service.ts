import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL: string;

  constructor(private http: HttpClient) {
    this.URL = environment.API_URL + '/api/';
  }

  login(params: any): Observable<any> {
    return this.http.post(this.URL + 'login', params);
  }

  logout(params): Observable<any> {
    return this.http.post(this.URL + 'logout', params);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  cleanStorage() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userData')
  }

}
