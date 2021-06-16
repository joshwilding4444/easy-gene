import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InputFormComponent } from './input-form/input-form.component';
import { LoginComponent } from './login/login.component';
import { MyresultsComponent } from './myresults/myresults.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'myresults', component: MyresultsComponent },
  { path: 'sequences', component: InputFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
