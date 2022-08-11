import { SiteComponent } from './site.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { AllmenusComponent } from './allmenus/allmenus.component';
import { AddmenuComponent } from './mymenu/addmenu/addmenu.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SiteComponent,
    FooterComponent,
    MymenuComponent,
    AllmenusComponent,
    AddmenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SiteRoutingModule,
  ],
})
export class SiteModule {}
