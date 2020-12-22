import { AlertasService } from './../service/alertas.service';
import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string
  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() : void{
  }

  conferirSenha(event: any) {
    this.senha = event.target.value

  }

  cadastrar() {

    if( this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alerta.showAlertSuccess('Usuario cadastrado com sucesso!')
      })
    }else {
      this.alerta.showAlertDanger('Suas senhas não conferem')
    }

    

  }

 

}
