import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private readonly CURRENT_USER_KEY = 'currentUser';
	private readonly API_URL = '/api/login';
	private readonly _user = signal<User | null>(null);

	constructor(
		private http: HttpClient
	) {
    	try {
			const user = JSON.parse(localStorage.getItem(this.CURRENT_USER_KEY) as string);
			this._user.set(user);
		} catch (e) {
			//
		}
	}

	get currentUser() {
		return this._user.asReadonly();
	}

	get isLoggedIn() {
		return this._user() !== null;
	}

	public login(email: string, password: string): Observable<User> {
		return this.http.post<User>(this.API_URL, { email, password }).pipe(
			tap((user) => {
				if (user?.token) {
					localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
					this._user.set(user);
				}
			})
		);
	}

	public logout(): Observable<boolean> {
		return new Observable<boolean>((observer) => {
			localStorage.removeItem(this.CURRENT_USER_KEY);
			this._user.set(null);
			observer.next(true);
			observer.complete();
		});
	}
}
