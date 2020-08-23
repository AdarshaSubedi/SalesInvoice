import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustService } from '../cust.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NotificationService} from '../notification.service';



@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.scss']
})
export class CustComponent implements OnInit {

  
  constructor(public custservice: CustService, private notificationService:NotificationService, public dialogRef: MatDialogRef<CustComponent>) { }
  customerList;
  customerForm: FormGroup;

  ngOnInit(): void {
    this.custservice.getAllCustomer();
    this.customerForm = this.custservice.form;
  }

  onSubmit(){
    if (this.custservice.form.valid){
      if(this.custservice.form.get('customerId').value){
        const custdataforupdate = { customerId:this.custservice.form.get('customerId').value, 
                customerName: this.customerForm.controls.customerName.value,
                customerEmail: this.customerForm.controls.customerEmail.value,
                customerContact: this.customerForm.controls.customerContact.value,
                customerAddress: this.customerForm.controls.customerAddress.value }
              this.custservice.updateCustomer(custdataforupdate).subscribe(() => {
                this.customerForm.reset();
              });
              this.onClose();
      }else{
        this.custservice.saveCustomer(this.custservice.form.value).subscribe(() => {
          this.notificationService.success("Submitted Successfully :)");
          this.onClose();
        });
      }
     
    }
  }

  GetCustomerData(){
    this.custservice.getAllCustomer().subscribe(data => {
      this.customerList = data;
    }); 
  }
  
  onClear(){
    this.custservice.form.reset();
    this.custservice.initializeFormGroup();
  }

  onClose(){
    this.onClear();
    this.dialogRef.close();
    this.GetCustomerData();
  }

}
