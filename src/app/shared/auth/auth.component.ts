import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

type TypeLoginRegistrer = 'Login' | 'Registrer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./auth.component.css']
})
export class AuthComponent implements OnInit{
  
  public formReg: FormGroup;
  public type: TypeLoginRegistrer = 'Registrer';
  public showType: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.removeItem('navbar');
    localStorage.setItem('navbar', 'Client');
    window.location.reload();
    /*
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
    */
    }

  onSubmitAdmin() {
    localStorage.removeItem('navbar');
    localStorage.setItem('navbar', 'Admin');
    window.location.reload();
    /*
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
    */
    }

  changeType() {
    this.showType = !this.showType;
    if(!this.showType) {
      this.type = 'Registrer';
    }else{
      this.type = 'Login';
    }
  }
}
