import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { CardProduct } from 'src/app/Interfaces/card-product.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, switchMap } from 'rxjs';
import 'firebase/database';
import * as data from '../../models/card-product-test.json';
import { __awaiter } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-product-list',
  templateUrl: './card-product-list.component.html',
  styleUrls: ['./card-product-list.component.css']
})
export class CardProductListComponent implements OnInit{
  public cardsList: CardProduct[] = [];

  constructor(
    private db: AngularFireDatabase,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    /**
     * Lo comentamos para hacerlo exclusivo y evitar que se cargue 
     * cada vez que se inicia la aplicación 
     * */
    // if (localStorage.getItem('cardsList') == null) {
    //   this.getStarted();
    // }

    this.cardsList = JSON.parse(localStorage.getItem('cardsList') || '{}') as CardProduct[];
    console.log(this.cardsList);
    this.getLoad();
    //this.getStarted();
  }

  ngOnInit(): void {
  }

  async getStarted(){
    var card: CardProduct[] = [];
    
    await this.getCardsList().then((database) => {
      card = database as CardProduct[];
    });

    this.cardsList = card;

    localStorage.setItem('cardsList', JSON.stringify(this.cardsList));
    console.log(this.cardsList);
  }

  getCardsList(){
    return new Promise((resolve) => {
      this.db.list('registros').valueChanges().subscribe((data) => {
        resolve(data);
      });
    });
  }

  getLoad(){
    if(localStorage.getItem('CardFilter') === 'Viaje'){
      this.cardsList = this.cardsList.filter((card) => card.type == 'Vuelo');
      console.log(this.cardsList);
    }else if(localStorage.getItem('CardFilter') === 'Hospedaje'){
      this.cardsList = this.cardsList.filter((card) => card.type == 'Hospedaje');
      console.log(this.cardsList);
    }else if(localStorage.getItem('CardFilter') === 'Paquetes'){
      this.cardsList = this.cardsList.filter((card) => card.type == 'Paquetes');
      console.log(this.cardsList);
    }
  }
}
