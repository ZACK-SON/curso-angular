import { Component, OnInit} from '@angular/core';
//import { ClienteService } from './services/cliente.service';

import { NgIf, NgFor, AsyncPipe, SlicePipe } from '@angular/common';
import { ApiListaClientesService } from './services/api-lista-clientes.service';
import { Observable } from 'rxjs';
//import { HttpClientModule } from '@angular/common/http';

import { Cliente } from './model/cliente.model';
import { ClientePokemonResults } from './model/cliente.model';


@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [ NgIf, NgFor, AsyncPipe, SlicePipe ],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.scss'
})


export class ListaClientesComponent implements OnInit {
  //clientes: Cliente[] = [];

  public Clientes$!: Observable<ClientePokemonResults>;
  public numeroPokemon: string = '';


  // constructor(private clienteService: ClienteService) {}

  constructor(private ApiListaClientesService: ApiListaClientesService) {}

  // getApiClientes(){
  //   this.Clientes$.getApiClientes('https://pokeapi.co/api/v2/pokemon/?offset=2&limit=1')
  //     .subscribe(retorno => this.consClientes = retorno);
  //     };
  // //}

    ngOnInit(): void {
      this.Clientes$ = this.ApiListaClientesService.getApiClientes();

    
    }


  // ngOnInit(): void {
  //     this.clientes = this.clienteService.getClientes();
  // }
}
