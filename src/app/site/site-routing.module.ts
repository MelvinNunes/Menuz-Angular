import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductspageComponent } from './productspage/productspage.component';
import { AuthGuard } from '../utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductspageComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
