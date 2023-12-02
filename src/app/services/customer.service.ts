import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44322/api/Customers/getall';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.http.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
