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
import { SalescardComponent } from './home/cards/salescard/salescard.component';
import { PerformancecardComponent } from './home/cards/performancecard/performancecard.component';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmmodalComponent } from './components/modal/confirmmodal/confirmmodal.component';
import { ClientspageComponent } from './clientspage/clientspage.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    LateralbarComponent,
    ClientscardComponent,
    SalescardComponent,
    PerformancecardComponent,
    ModalComponent,
    ConfirmmodalComponent,
    ClientspageComponent,
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
