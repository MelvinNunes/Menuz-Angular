import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ItemslistComponent } from './lists/itemslist/itemslist.component';
import { MenuslistComponent } from './lists/menuslist/menuslist.component';
import { UserlistComponent } from './lists/userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserlistComponent },
      { path: 'menus', component: MenuslistComponent },
      { path: 'items', component: ItemslistComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
