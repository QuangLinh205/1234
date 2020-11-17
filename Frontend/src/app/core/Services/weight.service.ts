import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Weight } from "../models/weight.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  httpOptions = {
    headers: new HttpHeaders({contentType: 'application/json'})
  };
  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<Weight[]> {
    return this.http.get<Weight[]>(`${environment.URL_API}/Weight/all`);
  }

  getById(id: number): Observable<Weight[]> {
    return this.http.get<Weight[]>(`${environment.URL_API}/Weight/${id}`);
  }

  deleteWeight(Id: number): Observable<Weight[]> {
    return this.http.delete<Weight[]>(`${environment.URL_API}/Weight/${Id}`);
  }

  updateWeight( data): Observable<Weight[]> {
    return this.http.put<Weight[]>(`${environment.URL_API}/Weight`, data);
  }

  addWeight(data): Observable<Weight> {
    return this.http.post<Weight>(`${environment.URL_API}/Weight`, data, this.httpOptions);
  }
}
