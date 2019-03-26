import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazaCardComponent } from './raza-card/raza-card.component';
import { RazaListComponent } from './raza-list/raza-list.component';
import { RazaDetailsComponent } from './raza-details/raza-details.component';
import { RazasRoutingModule } from './raza-routing.module';


@NgModule({
  declarations: [
    RazaCardComponent,
    RazaListComponent,
    RazaDetailsComponent

  ],
  imports: [
    CommonModule,
    RazasRoutingModule

  ]
})
export class RazaModule { }
