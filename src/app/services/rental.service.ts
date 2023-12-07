import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { rentalDetails } from '../models/rentalDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "https://localhost:44322/api/"

  getAllRentalDetails():Observable<ListResponseModel<rentalDetails>>{
    let newPath:string = this.apiUrl + "rentals/getallrentaldetails"
    return this.http.get<ListResponseModel<rentalDetails>>(newPath)
  }
}
