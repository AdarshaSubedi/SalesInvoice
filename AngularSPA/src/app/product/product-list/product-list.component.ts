import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../notification.service';
import { FormGroup } from '@angular/forms';
import { ProdComponent } from '../prod/prod.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  prodid;
  productList;
  displayedColumns: string[] = ['sn', 'productName', 'unitPrice', 'description', 'actions'];

  form: FormGroup;

  constructor(
    private service: ProdService, private dialog: MatDialog, 
    private notificationservice: NotificationService) { }

  ngOnInit(): void {
    this.GetCustomerData();
    this.form = this.service.form;
  }
  
  GetCustomerData(){
    this.service.getAllProduct().subscribe(data => {
      this.productList = data;
    }); 
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogRef = this.dialog.open(ProdComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.GetCustomerData();
    });
  }

  onEdit(id){
    this.service.getProductById(id).subscribe(data => {
      this.prodid = id;
      this.form.patchValue(data);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      const dialogRef = this.dialog.open(ProdComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.GetCustomerData();
      });
    });
  }

  onDelete(id){
    if(confirm('Are you sure?')){
      this.prodid = id;
      this.service.deleteProductById(this.prodid).subscribe(data => {
        this.GetCustomerData();
      });
      this.notificationservice.warn('! Deleted Successfully')  
    }
  }

}
