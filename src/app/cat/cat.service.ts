import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCatImages() {
    return this.http.get(`${this.apiUrl}/cats`);
  }

  deleteCat(catId: string) {
    return this.http.delete(`${this.apiUrl}/cats/${catId}`);
  }
}
