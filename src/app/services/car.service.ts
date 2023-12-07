import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "https://localhost:44322/api/"

  getAllCarsDetails():Observable<ListResponseModel<carDetails>>{
    let newPath:string = this.apiUrl+"cars/getallcardetails"
    return this.http.get<ListResponseModel<carDetails>>(newPath)
  }
}
