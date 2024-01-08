import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { CardProduct } from 'src/app/models/card-product.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, switchMap } from 'rxjs';
import 'firebase/database';
import * as data from '../../models/card-product-test.json';
import { __awaiter } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsFireService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.css']
})
export class CardProductListComponent implements OnInit{
  public cardsList: CardProduct[] = [];

  constructor(
    private db: AngularFireDatabase,
    private productService: ProductsFireService,
    ) {
    /**
     * Lo comentamos para hacerlo exclusivo y evitar que se cargue 
     * cada vez que se inicia la aplicación 
     * */
    // if (localStorage.getItem('cardsList') === null) {
    //    this.getStarted();
    // }
    //this.getStarted();
  }

  ngOnInit(): void {
     this.cardsList = this.getCardList();
  }

  public async getStarted(){
    await this.productService.getStarted().then((data) => {
      this.cardsList = data as CardProduct[];
      window.location.reload();
    });
  }

  public getCardList(): CardProduct[]{
    if(localStorage.getItem('cardsList')){
      this.cardsList = this.productService.getLoad(
      JSON.parse(localStorage.getItem('cardsList') || '{}') as CardProduct[]);
    }
    return this.cardsList;
  }

}
