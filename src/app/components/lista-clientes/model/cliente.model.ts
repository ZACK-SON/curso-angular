export interface Cliente {
    id: number;
    nome: string;
    email: string;
    status: string;
  }


  export interface ClientePokemon {
    name: string;
    url: string;
  }

  export interface ClientePokemonResults {
    count: number;
    next: string;
    previous: string;
    results: ClientePokemon[]
  }