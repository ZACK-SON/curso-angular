import { TestBed } from '@angular/core/testing';

import { ApiListaClientesService } from './api-lista-clientes.service';

describe('ApiListaClientesService', () => {
  let service: ApiListaClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiListaClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
