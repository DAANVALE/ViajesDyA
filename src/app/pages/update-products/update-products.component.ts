import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CardProductComponent } from 'src/app/components/card-product-list/card-product/card-product.component';
import { CardProduct, CardProductType,  } from 'src/app/models/card-product.interface';
import { ProductsFireService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {
  public cardsList: CardProduct[] = [];
  public cards?: CardProduct;

  public formReg!: FormGroup;

  opciones: SelectItem[] = [
    { label: 'Vuelo', value: 'Vuelo'},
    { label: 'Hospedaje', value: 'Hospedaje' },
    { label: 'Paquetes', value: 'Paquetes' },
  ];

  opcionSeleccionada: SelectItem = { label: '', value: '' };

  constructor(
    private productService: ProductsFireService,
    private authService: UserService,
    private router: Router,
    ) {
    /**
     * Lo comentamos para hacerlo exclusivo y evitar que se cargue 
     * cada vez que se inicia la aplicación 
     * */
    // if (localStorage.getItem('cardsList') == null) {
    //   this.getStarted();
    // }

      this.formReg = new FormGroup ({
        place: new FormControl(),
        startTime: new FormControl(),
        finishTime: new FormControl(),
        precio: new FormControl(),
        type: new FormControl()
      })

  }

  ngOnInit(): void {

    if(!this.authService.isLogged){
      this.router.navigate(['Auth']);
    }

    this.getCardList();
  }

  public async getStarted(){
    await this.productService.getStarted();
    this.getCardList();
    window.location.reload();
  }

  public getCardList(): void{

    localStorage.setItem('CardFilter', this.opcionSeleccionada.value);

    if(localStorage.getItem('cardsList')){
      this.cardsList = this.productService.getLoad(
      JSON.parse(localStorage.getItem('cardsList') || '{}') as CardProduct[]);
    }
  }

  public setCardList():void{

    this.cards = this.formReg.value as CardProduct;
    
    this.cards.type = this.opcionSeleccionada.value;
    // this.cards = { precio: 0, startTime: "", finishTime: "", place: "", type: this.opcionSeleccionada.value };

    this.productService.setCard(this.cards);
  }

  public actualizarDatoSeleccionado(){
    localStorage.setItem('CardFilter', this.opcionSeleccionada.value);
    this.getCardList();
  }
}
