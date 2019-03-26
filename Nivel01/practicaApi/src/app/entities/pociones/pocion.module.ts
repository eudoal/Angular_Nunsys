import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocionRoutingModule } from './pocion-routing.module';
import { PociongridComponent } from './pociongrid/pociongrid.component';
import { PociondetailComponent } from './pociondetail/pociondetail.component';
import { PocionlistComponent } from './pocionlist/pocionlist.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [PociongridComponent, PociondetailComponent, PocionlistComponent],
  imports: [
    CommonModule,
    PocionRoutingModule,
    HttpClientModule
  ],
  exports:[
    PociongridComponent
  ],
})
export class PocionModule { }
