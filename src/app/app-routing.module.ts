import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats',
    loadChildren: () => import('./cat/cat.module').then(m => m.CatModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./image/image.module').then(m => m.ImageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
