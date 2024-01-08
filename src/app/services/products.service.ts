import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CardProduct } from '../models/card-product.interface';

@Injectable({providedIn: 'root'})
export class ProductsFireService {

  public cardsList: CardProduct[] = [];
  
  constructor(
      private db: AngularFireDatabase,
      ) {
      /**
       * Lo comentamos para hacerlo exclusivo y evitar que se cargue 
       * cada vez que se inicia la aplicación 
       * */
      // if (localStorage.getItem('cardsList') == null) {
      //   this.getStarted();
      // }
      //this.getStarted();
    }
  
    ngOnInit(): void {
    }

    public async getStarted(): Promise<CardProduct[]>{
      var card: CardProduct[] = [];
      
      await this.getCardsList().then((database) => {
        return card = database as CardProduct[];
      });
  
      this.cardsList = card;

      localStorage.setItem('cardsList', JSON.stringify(this.cardsList));
      
      return this.cardsList;
    }
  
    getCardsList(){
      return new Promise((resolve) => {
        this.db.list('registros').valueChanges().subscribe((data) => {
          resolve(data);
        });
      });
    }

    public async setCard(card: CardProduct): Promise<void> {
      await this.setCardsList(card);
      localStorage.setItem('registros', JSON.stringify(card));
    }
  
    setCardsList(card: CardProduct) {
      return this.db.list('registros').push(card);
    }
  
    public getLoad(cardList: CardProduct[]): CardProduct[]{

      if (cardList === null) {
        return [];
      } 

      if(localStorage.getItem('CardFilter') === 'Vuelo'){
        cardList = cardList.filter((card) => card.type == 'Vuelo') 
      }else if(localStorage.getItem('CardFilter') === 'Hospedaje'){
        cardList = cardList.filter((card) => card.type == 'Hospedaje');
      }else if(localStorage.getItem('CardFilter') === 'Paquetes'){
        cardList = cardList.filter((card) => card.type == 'Paquetes');
      }

      return cardList;
    }
}