import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44322/api/Brands/getall';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.http.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
