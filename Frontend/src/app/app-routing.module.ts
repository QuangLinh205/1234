import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightComponent } from './component/weight/weight.component';
import { UpdateWeightComponent } from './component/update-weight/update-weight.component';
import { DeleteWeightComponent } from './component/delete-weight/delete-weight.component';
import { DetailWeightComponent } from './component/detail-weight/detail-weight.component';
import {AddWeightComponent} from './component/add-weight/add-weight.component';
import { RegisterAccComponent } from './component/register-acc/register-acc.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: "weight/update/:id", component: UpdateWeightComponent },
  { path: "weight/detail/:id", component: DetailWeightComponent },
  { path: "weight/delete", component: DeleteWeightComponent },
  { path: "weight/add", component: AddWeightComponent},
  { path: "weight", component: WeightComponent },
  { path: "", component: RegisterAccComponent },
  { path: "login", component: LoginComponent},
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
