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

  getCarsDetailsByBrand(brandId:number):Observable<ListResponseModel<carDetails>>{
    let newPath:string = this.apiUrl+"cars/getcardetailsbybrand?brandId="+brandId;
    return this.http.get<ListResponseModel<carDetails>>(newPath);
  }

  getCarsDetailsByColor(colorId:number):Observable<ListResponseModel<carDetails>>{
    let newPath:string = this.apiUrl+"cars/getcardetailsbycolor?colorId="+colorId;
    return this.http.get<ListResponseModel<carDetails>>(newPath);
  }
}
