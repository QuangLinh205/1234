import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { User } from "../models/user.model";
import { Login } from "../models/login.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data): Observable<User> {
    return this.http.post<User>(`${environment.URL_API}/user`, data);
  }

  login(data: any): Observable<Login> {
    return this.http.post<Login>(`${environment.URL_API}/user/login`, data);
  }
}
