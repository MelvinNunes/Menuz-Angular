import { Error500Component } from './errors/error500/error500.component';
import { Error404Component } from './errors/error404/error404.component';
import { AuthGuard } from './utils/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: 'site',
    loadChildren: () => import(`./site/site.module`).then((m) => m.SiteModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: '**', redirectTo: 'site', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
