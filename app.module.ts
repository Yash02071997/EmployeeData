import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EmployeeListComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [
    ProductService,
    EmployeeService // Include EmployeeService in the providers' array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
