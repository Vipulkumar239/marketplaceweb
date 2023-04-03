import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
    },
    {
      path: 'pages',
      loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
    },
    {
      path: '',
      canActivate:[AuthGuard],
      loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  
    
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// server {
//   listen 80 default_server;
//   listen [::]:80 default_server;

//   #provide the build path
//   root /home/ubuntu/advert-library/component.js;
//   index index.html index.htm index.nginx-debian.html;
//   server_name _;
//   location / {
//        try_files $uri $uri/ /index.html;
//   }
// }