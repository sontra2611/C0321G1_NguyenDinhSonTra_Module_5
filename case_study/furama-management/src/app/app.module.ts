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
import { HttpClientModule} from "@angular/common/http";
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';

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
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
