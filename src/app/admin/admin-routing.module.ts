import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ItemslistComponent } from './lists/itemslist/itemslist.component';
import { MenuslistComponent } from './lists/menuslist/menuslist.component';
import { UserlistComponent } from './lists/userlist/userlist.component';
import { ItemsComponent } from './manage/items/items.component';
import { MenusComponent } from './manage/menus/menus.component';
import { UsersComponent } from './manage/users/users.component';
import { UserstypeComponent } from './manage/userstype/userstype.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserlistComponent },
      { path: 'menus', component: MenuslistComponent },
      { path: 'items', component: ItemslistComponent },
      { path: 'manage/users', component: UsersComponent },
      { path: 'manage/userstype', component: UserstypeComponent },
      { path: 'manage/menus', component: MenusComponent },
      { path: 'manage/items', component: ItemsComponent },
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
