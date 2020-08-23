import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdService } from '../prod.service';
import { FormGroup } from '@angular/forms';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {

  constructor(public prodservice: ProdService, private notificationService:NotificationService, public dialogRef: MatDialogRef<ProdComponent>) { }
  productList;
  productForm: FormGroup;

  ngOnInit(): void {
    this.prodservice.getAllProduct();
    this.productForm = this.prodservice.form;
  }

  onSubmit(){
    if (this.prodservice.form.valid){
      if(this.prodservice.form.get('productId').value){
        const custdataforupdate = { productId:this.prodservice.form.get('productId').value, 
                productName: this.productForm.controls.productName.value,
                unitPrice: this.productForm.controls.unitPrice.value,
                description: this.productForm.controls.description.value
              }
              this.prodservice.updateProduct(custdataforupdate).subscribe(() => {
                this.productForm.reset();
              });
              this.onClose();
      }else{
        this.prodservice.saveProduct(this.prodservice.form.value).subscribe(() => {
          this.notificationService.success("Submitted Successfully :)");
          this.onClose();
        });
      }
     
    }
  }

  GetProductData(){
    this.prodservice.getAllProduct().subscribe(data => {
      this.productList = data;
    }); 
  }

  onClear(){
    this.prodservice.form.reset();
    this.prodservice.initializeFormGroup();
  }

  onClose(){
    this.onClear();
    this.dialogRef.close();
    this.GetProductData();
  }

}
