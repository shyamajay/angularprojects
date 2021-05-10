import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phonenumber } from '../phonenumber';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  phone : Phonenumber = new Phonenumber()
  customer: Customer = new Customer()
  constructor(private customerservice:CustomerService,private route:ActivatedRoute,private phoneservice:PhoneService,private router:Router) { }
  id!:number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.customerservice.getCustomerById(this.id).subscribe(data=>{
      console.log(data);
      this.customer=data;
    })
  }

  onSubmit(){
    this.savePhone();
  }
  savePhone() {
    this.phoneservice.addPhoneNumber(this.id,this.phone).subscribe(data=>{
      console.log(data)
      this.phone=data;
      })
      this.navigateback();
  }
  navigateback() {
    this.router.navigate(['/customer']);
  }

}
