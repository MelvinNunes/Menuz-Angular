import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LateralbarComponent } from './lateralbar/lateralbar.component';
import { ClientscardComponent } from './home/cards/clientscard/clientscard.component';
import { PerformancecardComponent } from './home/cards/performancecard/performancecard.component';
import { ItemscardComponent } from './home/cards/itemscard/itemscard.component';
import { UserlistComponent } from './lists/userlist/userlist.component';
import { MenuslistComponent } from './lists/menuslist/menuslist.component';
import { ItemslistComponent } from './lists/itemslist/itemslist.component';
import { UserstypeComponent } from './manage/userstype/userstype.component';
import { UsersComponent } from './manage/users/users.component';
import { MenusComponent } from './manage/menus/menus.component';
import { ItemsComponent } from './manage/items/items.component';
import { MenuComponent } from './home/cards/menu/menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    LateralbarComponent,
    ClientscardComponent,
    PerformancecardComponent,
    ItemscardComponent,
    UserlistComponent,
    MenuslistComponent,
    ItemslistComponent,
    UserstypeComponent,
    UsersComponent,
    MenusComponent,
    ItemsComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
