import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

const routes: Routes = [
  {path:"customer",component:CustomerListComponent},
  {path:"",redirectTo:"customer",pathMatch:"full"},
  {path:"create",component:CreateCustomerComponent},
  {path:"add/:id",component:AddPhoneComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
