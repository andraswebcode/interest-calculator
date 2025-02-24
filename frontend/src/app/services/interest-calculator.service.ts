import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interest } from '../types/interest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestCalculatorService {
  private readonly API_URL = 'http://34.0.242.199:8080/api/interests';

  constructor(
    private http: HttpClient
  ) { }

  calcInterest(data: Omit<Interest, 'interest'>): Observable<Interest> {
    return this.http.post<Interest>(this.API_URL, data);
  }

  getInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(this.API_URL);
  }
}
