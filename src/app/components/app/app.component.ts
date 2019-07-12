import { Component } from '@angular/core'; 
import { Usuario, UserType } from 'src/app/others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tutorial';


user: Usuario[] =[{
  ID: 1,
  Nombre: "Rafael",
  Apellidos: "Ortiz",
  Nick: "rafael",
  Email: "rafael",
  Contraseña: "123",
  Tipo: UserType.Administrador
},{
  ID: 2,
  Nombre: "Dolmedes",
  Apellidos: "Ortiz",
  Nick: "rafael",
  Email: "rafael",
  Contraseña: "123",
  Tipo: UserType.Cliente
}]

//Hacer casting

user1: Usuario =<Usuario>{
  ID: 3,
  Nombre: "Dolmedes",
  Apellidos: "Ortiz",
  Nick: "rafael",
  Email: "rafael",
  Contraseña: "123",
  Tipo: UserType.Cliente
}

mostrar():void{
console.log(this.user1.Apellidos);
}

}

