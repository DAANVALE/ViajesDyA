import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navModelType } from 'src/app/models/nav-users.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {

  constructor(private router: Router){}

  onClick(myPath: string): void {
    localStorage.removeItem('CardFilter');
    localStorage.setItem('CardFilter', myPath); 
    this.router.navigate(['CardProducts/' + myPath]);
  }

}
