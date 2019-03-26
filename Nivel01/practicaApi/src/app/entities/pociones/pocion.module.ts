import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocionRoutingModule } from './pocion-routing.module';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PocionDetailComponent, 
    PocionListComponent, 
    PocionGridComponent],
  imports: [
    CommonModule,
    PocionRoutingModule,
    HttpClientModule
  ]
})
export class PocionModule { }
