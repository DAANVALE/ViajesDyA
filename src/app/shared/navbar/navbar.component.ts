import { Component, OnInit } from '@angular/core';
import { update } from 'firebase/database';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { CardProduct, CardProductType } from 'src/app/models/card-product.interface';
import { navModelType } from 'src/app/models/nav-users.model';
import { userStates, navModel, adminState, loginState } from 'src/app/models/nav.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit{

  public localS = localStorage;

  public navbar: NavbarComponent = this;
  items?: MenuItem[];
  cardState?: navModelType;
  
  constructor(){
    this.cardState = localStorage.getItem('navbar') as navModelType;
    if (this.cardState === null){
      this.cardState = 'Non';
    }
    this.updateNavbar(this.cardState);
  }

  public ngOnInit(): void {
    this.items = navModel;
    this.cardState = localStorage.getItem('navbar') as navModelType;
    if (this.cardState === null){
      this.cardState = 'Non';
    }

    this.updateNavbar(this.cardState);
    //localStorage.getItem('navbar') === null ? this.cardState = 'Non' : this.cardState = localStorage.getItem('navbar') as navModelType;
    //this.items = this.items.concat(loginState);
  }

  public updateNavbar(cardState: navModelType){
    if(cardState === 'Non'){
      this.items = navModel;
      this.items = this.items.concat(loginState);
    }else if(cardState === 'Client'){
      this.items = navModel;
      this.items = this.items.concat(userStates);
    }else if(cardState === 'Admin'){
      this.items = navModel;
      this.items = this.items.concat(adminState);
    }
  }

}