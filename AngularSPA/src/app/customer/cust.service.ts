import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  
  constructor(private http: HttpClient) { }
  
  form: FormGroup = new FormGroup({
    customerId: new FormControl(0),
    customerName: new FormControl('', Validators.required),
    customerEmail: new FormControl('', Validators.email),
    customerContact: new FormControl('', [Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(7), Validators.maxLength(10)]),
    customerAddress: new FormControl('', Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      customerId: 0,
      customerName: '',
      customerEmail: '',
      customerContact: '',
      customerAddress: ''
    });
  }
  
  saveCustomer(CustomerData){
    return this.http.post('https://localhost:44326/cust', CustomerData);
  }
  updateCustomer(CustomerData){
    return this.http.put('https://localhost:44326/cust', CustomerData);
  }
  getAllCustomer(){
    return this.http.get('https://localhost:44326/cust');
  }
  getCustomerById(custid){
    return this.http.get('https://localhost:44326/cust/' + custid);
  }
  deleteCustomerById(custid){
    return this.http.delete('https://localhost:44326/cust/' + custid);
  }

}
