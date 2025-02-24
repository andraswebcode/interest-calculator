import { Component, DestroyRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { catchError, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public email?: string;
	public password?: string;

  constructor(
    private readonly authService: AuthService,
	private readonly router: Router,
	private readonly snackBar: MatSnackBar,
	private readonly destroyRef: DestroyRef
  ){}

  public login() {
		if (this.email && this.password) {
			this.authService
				.login(this.email, this.password)
				.pipe(
					tap(() => this.router.navigate(['/calculator'])),
					catchError((error) => {
						this.snackBar.open(error.error.message, '', { duration: 4000 });
						throw error;
					}),
					takeUntilDestroyed(this.destroyRef)
				)
				.subscribe();
		}
	}
}
