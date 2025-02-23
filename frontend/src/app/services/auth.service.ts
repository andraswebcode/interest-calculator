import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private readonly CURRENT_USER_KEY = 'currentUser';
	private readonly _user = signal<User | null>(null);

	constructor() {
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

	public login(username: string, password: string) {}

	public logout() {
		return new Observable<boolean>((observer) => {
			localStorage.removeItem(this.CURRENT_USER_KEY);
			observer.next(true);
		});
	}
}
