import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phonenumber } from './phonenumber';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
 

  constructor(private httpClient:HttpClient) { }

  getAllPhoneNumbers(cid:number) {
    return this.httpClient.get<Phonenumber[]>(`http://localhost:8080/customerapi/${cid}/displayphone`)
  }

  addPhoneNumber(cid: number, phone: Phonenumber):Observable<Phonenumber> {
    return this.httpClient.post<Phonenumber>(`http://localhost:8080/customerapi/${cid}/addphone`,phone)
  }

  deletePhoneNumber(cid: number, id: number):Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/customerapi/${id}/delete/${id}`)
  }
}
