import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = environment.apiUrl;
  categories: string[] = [];

  constructor(private http: HttpClient) {}

  getItem(id: string) {
    return this.http.get(`${this.apiUrl}/items/${id}`);
  }

  getItems(query: string) {
    return this.http.get(`${this.apiUrl}/items?q=${query}`);
  }

  getCategories() {
    return this.categories;
  }
}
