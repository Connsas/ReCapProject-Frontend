import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44322/api/Colors/getall';

  constructor(private http: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.http.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
