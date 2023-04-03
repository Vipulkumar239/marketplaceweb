import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { Components } from './components.component';
import { AuthComponent } from '../auth/auth.component';
import { StoresComponent } from './dashboard/stores/stores.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './dashboard/stores/products/products.component';


const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'stores',
        component: StoresComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [ DashboardComponent, CartComponent, SettingComponent, StoresComponent, ProductsComponent,] ,
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule],
  
})
export class ComponentsModule { }
