import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardProductListComponent } from './components/card-product-list/card-product-list.component';
import { AuthComponent } from './shared/auth/auth.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'CardProducts', loadChildren: () => import('./components/card-product-list/card-routing.module').then(m => m.CardRoutingModule)},
  {path: 'Auth', component: AuthComponent},
  {path: 'Edit', component: UpdateProductsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
