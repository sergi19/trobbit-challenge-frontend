import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat.component';
import { Routes } from '@angular/router';
import { CatRoutingModule } from './cat.routing.module';

const route: Routes = [
  {
    path: '',
    component: CatComponent,
  }
]

@NgModule({
  declarations: [
    CatComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
  ]
})
export class CatModule { }
