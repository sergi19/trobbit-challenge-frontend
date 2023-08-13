// import { inject } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { CatService } from './cat.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const catResolver: ResolveFn<Observable<any>> = (route, state) => {
  const catService = inject(CatService);
  return catService.getCatImages();
};
