import { MenuItem, PrimeIcons } from "primeng/api";
import { NavbarComponent } from "../shared/navbar/navbar.component";

export const initialState: MenuItem = {
  label: 'Viajar',
  icon: 'pi pi-compass',
  iconStyle: { 'text-decoration': 'none'},
  routerLink: 'CardProducts',
  command: () => {
    localStorage.removeItem('CardFilter');
    window.location.reload();
   },
  items: 
    [
      {label: 'Vuelos', icon: PrimeIcons.SEND, routerLink: 'CardProducts/Vuelo', command: () => {
        localStorage.setItem('CardFilter', 'Vuelo');
        window.location.reload();
       }
      },
      {label: 'Hospedaje', icon: PrimeIcons.HOME, routerLink: 'CardProducts/Hospedaje', command: () => {
        localStorage.setItem('CardFilter', 'Hospedaje');
        window.location.reload();
       }},
      { separator: true },
      {label: 'Paquetes', icon: PrimeIcons.GIFT, routerLink: 'CardProducts/Paquetes', command: () => {
        localStorage.setItem('CardFilter', 'Paquetes');
        window.location.reload();
       }},
    ]
};

export const helpState: MenuItem = {
  label: 'Help',
  icon: 'pi pi-question',
  items: [
    {label: 'Contacto', icon: PrimeIcons.WHATSAPP},
    {label: 'Community', icon: PrimeIcons.USERS},
    {label: 'Oficinas', icon: PrimeIcons.MAP_MARKER}
  ]
};

export const cartState: MenuItem = {
  label: 'Cart',
  icon: 'pi pi-shopping-cart',
  items: [
    {label: 'Cart', icon: PrimeIcons.SHOPPING_CART},
    {label: 'Checkout', icon: PrimeIcons.CREDIT_CARD},
    {label: 'Confirmation', icon: PrimeIcons.CHECK_SQUARE}
  ]
};

export const userState: MenuItem = {
  label: 'User',
  icon: 'pi pi-user',
  items: [
    {label: 'Profile', icon: PrimeIcons.USER, routerLink: ''},
    {label: 'Sign Out', icon: PrimeIcons.SIGN_OUT, routerLink: 'Auth', command: () => {
      localStorage.removeItem('navbar');
      localStorage.setItem('navbar', 'Non');
      window.location.reload();
     }}
  ]
};

export const adminConfigurationState: MenuItem = {
  label: 'Configuration',
  icon: 'pi pi-server',
  items:[
    {label: 'Sells', icon: PrimeIcons.MONEY_BILL},
    {label: 'Promos', icon: PrimeIcons.GIFT, routerLink: 'Edit'},
  ]
}

export const adminState: MenuItem = {
  label: 'Admin',
  icon: 'pi pi-user',
  items: [
    adminConfigurationState,
    {label: 'Sign Out', icon: PrimeIcons.SIGN_OUT, routerLink: 'Auth', command: () => {
      localStorage.removeItem('navbar');
      localStorage.setItem('navbar', 'Non');
      window.location.reload();
     }}
  ]
}

export const loginState: MenuItem = {
  label: 'Login',
  icon: 'pi pi-user',
  routerLink: 'Auth',
  command: () => {
    localStorage.setItem('navbar', 'Non');
    window.location.reload();
   }
}

export const userStates: MenuItem[] = [
  cartState,
  userState,
]

export const navModel: MenuItem[] = [
    {
        label: 'Inicio',
        icon: 'pi pi-th-large',
        routerLink: '**'
    },
    initialState,
    helpState,
];
