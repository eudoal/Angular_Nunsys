import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocionRoutingModule } from './pocion-routing.module';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionEditComponent } from './pocion-edit/pocion-edit.component';
import { FormsModule  } from '@angular/forms'

@NgModule({
  declarations: [PocionGridComponent, PocionListComponent, PocionDetailComponent, PocionEditComponent],
  imports: [
    CommonModule,
    PocionRoutingModule,
    FormsModule
  ],
  exports: [
PocionGridComponent
  ]
})
export class PocionModule { }
