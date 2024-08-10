import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//este é do teste
import { ClientePokemonResults } from '../model/cliente.model';

//este é o do projeto
//import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ApiListaClientesService {

  constructor(private http: HttpClient) { }

  getApiClientes(): Observable<ClientePokemonResults>{
    return this.http.get<ClientePokemonResults>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`);
  }
}
