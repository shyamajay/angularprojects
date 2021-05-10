import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private httpClient:HttpClient) { }

  getAllCustomers() {
    return this.httpClient.get<Customer[]>(`http://localhost:8080/customerapi/display`);
  }

  createCustomer(customer: Customer):Observable<Customer> {
    return this.httpClient.post<Customer>(`http://localhost:8080/customerapi/add`,customer);
  }

  getCustomerById(cid: number):Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:8080/customerapi/customer/${cid}`);
  }

  deleteCustomer(cid: number):Observable<any>{
    return this.httpClient.get<Customer>(`http://localhost:8080/customerapi//delete/${cid}`);
  }
}
