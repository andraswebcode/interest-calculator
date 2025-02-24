import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'calculator',
		pathMatch: 'full'
	},{
		path: 'login',
		component: LoginComponent
	},{
		path: 'calculator',
		canActivate: [authGuard],
		loadComponent: () => import('./pages/calculator-page/calculator-page.component').then(m => m.CalculatorPageComponent)
	},{
		path: 'interests',
		canActivate: [authGuard],
		loadComponent: () => import('./pages/interests-page/interests-page.component').then(m => m.InterestsPageComponent)
	}
];
