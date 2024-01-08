import { RouterModule, Routes } from '@angular/router';
import { CardProductListComponent } from './card-product-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'Vuelo', component: CardProductListComponent },
    { path: 'Hospedaje', component: CardProductListComponent },
    { path: 'Paquetes', component: CardProductListComponent },
    { path: '**', redirectTo: 'Paquetes'},
]

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CardRoutingModule { }