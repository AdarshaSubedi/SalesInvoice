import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    productId: new FormControl(0),
    productName: new FormControl('', Validators.required),
    unitPrice: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
    description: new FormControl('') 
  });

  initializeFormGroup(){
    this.form.setValue({
      productId: 0,
      productName: '',
      unitPrice: '',
      description: ''
    });
  }



  saveProduct(ProductData){
    return this.http.post('https://localhost:44326/prod', ProductData);
  }
  updateProduct(ProductData){
    return this.http.put('https://localhost:44326/prod', ProductData);
  }
  getAllProduct(){
    return this.http.get('https://localhost:44326/prod');
  }
  getProductById(prodid){
    return this.http.get('https://localhost:44326/prod/' + prodid);
  }
  deleteProductById(prodid){
    return this.http.delete('https://localhost:44326/prod/' + prodid);
  }
}
