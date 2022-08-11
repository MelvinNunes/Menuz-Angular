import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymenuComponent } from './mymenu/mymenu.component';
import { AllmenusComponent } from './allmenus/allmenus.component';
import { AuthGuard } from '../utils/auth.guard';
import { AddmenuComponent } from './mymenu/addmenu/addmenu.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'allmenus', component: AllmenusComponent },
      { path: 'mymenus', component: MymenuComponent },
      { path: 'addmenu', component: AddmenuComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
