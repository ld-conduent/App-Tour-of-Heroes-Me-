import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { AuthGuard, CanEditGuard } from './auth.guard';
import { AuthAuxGuard } from './auth-aux.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'detail/:id',
    canActivate: [CanEditGuard],
    component: HeroDetailComponent,
  },
  {
    path: 'heroes',
    canActivate: [AuthGuard, AuthAuxGuard],
    component: HeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
