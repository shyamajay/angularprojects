import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Phonenumber } from '../phonenumber';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer() 
  phone:Phonenumber = new Phonenumber()
  id!:number;
  constructor(private customerservice:CustomerService,private route:ActivatedRoute,private router:Router,private phoneservice:PhoneService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cid']
  }

  onSubmit(){
    this.saveCustomer();
  }
  saveCustomer() {
    this.customerservice.createCustomer(this.customer).subscribe(data=>{
      console.log(data)
      this.customer=data;
      this.id = this.customer.cid
      this.savePhone();
    })
  }
  savePhone() {
    this.phoneservice.addPhoneNumber(this.id,this.phone).subscribe(data=>{
      console.log(data)
      this.phone=data
    ;})
    this.navigateback()
  }
  navigateback() {
    this.router.navigate(['customer']);
  }
}
