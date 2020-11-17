import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightComponent } from './component/weight/weight.component';
import { DeleteWeightComponent } from './component/delete-weight/delete-weight.component';
import { UpdateWeightComponent } from './component/update-weight/update-weight.component';
import { DetailWeightComponent } from './component/detail-weight/detail-weight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWeightComponent } from './component/add-weight/add-weight.component';
import { RegisterAccComponent } from './component/register-acc/register-acc.component';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    DeleteWeightComponent,
    UpdateWeightComponent,
    DetailWeightComponent,
    AddWeightComponent,
    RegisterAccComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
