import { NgModule } from '@angular/core';
import { CatComponent } from './cat.component';
import { RouterModule, Routes } from '@angular/router';
import { catResolver } from './cat.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatComponent,
    resolve: {
      data: catResolver
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatRoutingModule { }
