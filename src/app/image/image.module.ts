import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { ImageRoutingModule } from './image.routing.module';



@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    ImageRoutingModule
  ]
})
export class ImageModule { }
