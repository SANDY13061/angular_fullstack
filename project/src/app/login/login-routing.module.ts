import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SuperuserModule } from '../superuser/superuser.module';
import { MainpageModule } from '../mainpage/mainpage.module';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'',
    loadChildren:()=> import('../superuser/superuser.module').then(m=>SuperuserModule)
  },
  {
    path:'',
    loadChildren:()=> import('../mainpage/mainpage.module').then(m=>MainpageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
