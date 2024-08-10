import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private clientes: Cliente[] = [
    { id: 1, nome: 'Zackson Wesner Rodriguez', email: 'zackson.rodriguez@caixa.gov.br', status: 'Ativo' },
    { id: 2, nome: 'João Paulo da Silva', email: 'joao.silva@caixa.gov.br', status: 'Inativo' },
    { id: 3, nome: 'Maria da silva', email: 'maria.silva@caixa.gov.br', status: 'Ativo' },
    { id: 4, nome: 'Paulo Matias da Silva', email: 'paulo.silva@caixa.gov.br', status: 'Inativo' },
    { id: 5, nome: 'Nicomedes da Silva', email: 'nicomedes.silva@caixa.gov.br', status: 'Ativo' },
    { id: 6, nome: 'Antonio da Silva', email: 'antonio.silva@caixa.gov.br', status: 'Inativo' },
    { id: 7, nome: 'José da Silva', email: 'jose.silva@caixa.gov.br', status: 'Ativo' }
    // Adicione mais clientes conforme necessário
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }
}