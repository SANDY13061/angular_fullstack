import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register/register.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainpageModule } from './mainpage/mainpage.module';
import { SuperuserModule } from './superuser/superuser.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./login/login.module').then(m=> m.LoginModule)
  },
  {
    path:'',
    loadChildren:()=> import('./register/register.module').then(m=>RegisterModule)
  },
  {
    path:'',
    loadChildren:()=> import('./mainpage/mainpage.module').then(m=>MainpageModule)
  },
  {
    path:'',
    loadChildren:()=> import('./superuser/superuser.module').then(m=>SuperuserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
