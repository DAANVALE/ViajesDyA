import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { CardProduct } from 'src/app/Interfaces/card-product.interface';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {
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
}
