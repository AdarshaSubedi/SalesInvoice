import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProdService } from './prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['sn', 'productName', 'unitPrice', 'description'];

  // productForm: FormGroup;
  productList;
  // prodid;
  // btnSave = 'Save';

  constructor(private fb:FormBuilder, private http:HttpClient, private prodservice:ProdService) { }
  dataSource = this.prodservice.getAllProduct();

  ngOnInit(): void {
  //   this.productForm = this.fb.group({
  //     productName: [''],
  //     unitPrice: [''],
  //     description: ['']
  //   });
    this.GetProductData();
  }

  // OnSubmit(){
  //   if(this.prodid && this.prodid > 0){
  //     const proddataforupdate = { productId:this.prodid, 
  //       productName: this.productForm.controls.productName.value,
  //       unitPrice: this.productForm.controls.unitPrice.value,
  //       description: this.productForm.controls.description.value }
  //     this.prodservice.updateProduct(proddataforupdate).subscribe(data => {
  //       this.GetProductData();
  //       this.productForm.reset();
  //       this.prodid = 0;
  //       this.btnSave = 'Save';
  //     });
  //   }else{
  //     this.prodservice.saveProduct(this.productForm.value).subscribe(data => {
  //       this.GetProductData();
  //     });
  //   }
    
  // }
  GetProductData(){
    this.prodservice.getAllProduct().subscribe(data => {
      this.productList = data;
    });
  }
  // edit(id){
  //   this.prodservice.getProductById(id).subscribe(data => {
  //     this.prodid = id;
  //     this.btnSave = 'Update';
  //     this.productForm.patchValue(data);
  //   });
  // }
  // delete(id){
  //   this.prodservice.deleteProductById(id).subscribe(data => {
  //     this.GetProductData();
  //   });
  // }

}
