import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  data: any[] = [];
  ClienteArray: Cliente[] = [];

  constructor(private apiService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      console.log(this.data);  // Verifica los datos en la consola
      this.ClienteArray=data;
      console.log(this.ClienteArray);
    })
  }

  nuevo() {
    this.router.navigate(['ingresar']);
  }
}