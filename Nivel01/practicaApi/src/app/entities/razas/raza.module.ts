import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazasRoutingModule } from './raza-routing.module';
import { RazacardComponent } from './razacard/razacard.component';
import { RazalistComponent } from './razalist/razalist.component';
import { RazadetailComponent } from './razadetail/razadetail.component';


@NgModule({
  declarations: [
    RazacardComponent,
    RazalistComponent,
    RazadetailComponent
  ],
  imports: [
    CommonModule,
    RazasRoutingModule
  
  ]
})
export class RazaModule { }
