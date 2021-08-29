import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from 'ngx-toastr';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { DeleteServiceComponent } from './service/delete-service/delete-service.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ListServiceComponent,
    CreateServiceComponent,
    ListContractComponent,
    DeleteCustomerComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
