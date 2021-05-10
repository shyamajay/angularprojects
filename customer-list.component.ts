import { PhoneService } from './../phone.service';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Phonenumber } from '../phonenumber';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[]=[]
  phonenumbers: Phonenumber[]=[]
  cid !: number;
  phoneId!:number;
  phones!:number[]
  constructor(private customerservice:CustomerService,private route:ActivatedRoute,private phoneservice:PhoneService,private router:Router) { }

  ngOnInit(): void {
    this.cid = this.route.snapshot.params['cid'];
    this.phoneId = this.route.snapshot.params['id'];
    this.getCustomers();
    this.getPhoneNumbers(this.cid);
  }
  getPhoneNumbers(cid:number) {
    this.phoneservice.getAllPhoneNumbers(cid).subscribe(data=>{
      console.log(data)
      this.phonenumbers = data;
    })
  }
  getCustomers() {
   this.customerservice.getAllCustomers().subscribe(data=>{
     console.log(data);
     this.customers = data;
   });
  }

  addNumber(cid:number){
    this.router.navigate(["add",cid]);
  }

  deleteNumber(id:number,phoneId:number){
    this.phoneservice.deletePhoneNumber(id,phoneId).subscribe(data=>{
      console.log(data)
    })
  }

  deleteCustomer(cid:number){
    this.customerservice.deleteCustomer(cid).subscribe(data=>{
      console.log(data)
    })
  }

  
}
