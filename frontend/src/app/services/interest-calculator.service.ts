import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interest } from '../types/interest';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class InterestCalculatorService {
  private readonly API_URL = 'http://34.0.242.199:8080/api/interests';

  constructor(
    private http: HttpClient
  ) { }

  calcInterest(data: Omit<Interest, 'id' | 'interest' | 'interest_amount' | 'elapsed_days'>): Observable<Interest> {
    const headers = this.getHeaders();
    return this.http.post<Interest>(this.API_URL, data, {
      headers
    });
  }

  getInterests(): Observable<Interest[]> {
    const headers = this.getHeaders();
    return this.http.get<Interest[]>(this.API_URL, {
      headers
    });
  }

  private getHeaders() {
    const userData: User = JSON.parse(localStorage.getItem('currentUser') || '{}');

    return {
      'Authorization': 'Bearer ' + userData.token
    };
  }
}
