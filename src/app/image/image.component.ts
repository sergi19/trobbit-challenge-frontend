import { Component } from '@angular/core';
import { ImageService } from './image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  images$: Observable<any>;

  constructor(private imageService: ImageService) {
    this.images$ = this.imageService.getRandomImages();
  }

  addFavouriteImage(imageId: string) {
    this.imageService.addFavouriteImage({ image_id: imageId })
      .subscribe(resp => console.log(resp));
  }
}
