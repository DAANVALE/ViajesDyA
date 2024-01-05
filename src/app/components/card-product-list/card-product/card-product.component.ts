import { Component, Input, OnInit } from '@angular/core';
import { CardProduct } from 'src/app/Interfaces/card-product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit{

  @Input()
  public myCard!: CardProduct;

  public type: string;
  public place: string;
  public startTime: string;
  public finishTime: string;

  constructor(){
    this.type = '';
    this.place = '';
    this.startTime = '';
    this.finishTime = '';
  }

  ngOnInit(): void {
    this.type = this.myCard.type;
    this.place = this.myCard.place;
    this.startTime = this.myCard.startTime;
    this.finishTime = this.myCard.finishTime;
    this.dynamicImage();
  }

  dynamicImage(){
    if(this.type === 'Vuelo'){
      this.imgUrl = '../../../assets/images/travel.jpg';
    }else if(this.type === 'Hospedaje'){
      this.imgUrl = '../../../assets/images/hospedaje.jpg';
    }else if(this.type === 'Paquetes'){
      this.imgUrl = '../../../assets/images/promos.jpg';
    }
  }

  public imgUrl: string = '../../../assets/images/background.jpg';
}
