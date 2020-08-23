import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { from } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { CustComponent } from './customer/cust/cust.component';
import { CustService } from './customer/cust.service';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ProdComponent } from './product/prod/prod.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceFormComponent } from './invoice/invoice-form/invoice-form.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { SalesFormComponent } from './invoice/invoice-form/sales-form/sales-form.component';
import { SalesListComponent } from './invoice/invoice-form/sales-list/sales-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    MainNavComponent,
    CustComponent,
    CustomerListComponent,
    ProdComponent,
    ProductListComponent,
    InvoiceComponent,
    InvoiceFormComponent,
    InvoiceListComponent,
    SalesFormComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [CustService],
  bootstrap: [AppComponent],
  entryComponents: [CustComponent, CustomerListComponent, ProdComponent]
})
export class AppModule { }
