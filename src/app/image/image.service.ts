import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRandomImages() {
    const limit = 10;
    return this.http.get(`${this.apiUrl}/images?limit=${limit}`);
  }

  addFavouriteImage(body: { image_id: string }) {
    return this.http.post(`${this.apiUrl}/images/favourites/add`, body);
  }
}
