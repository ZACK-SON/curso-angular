import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClientesComponent } from './lista-clientes.component';
import { ClienteService } from './services/cliente.service';
import { of } from 'rxjs';

describe('ListaClientesComponent', () => {
  let component: ListaClientesComponent;
  let fixture: ComponentFixture<ListaClientesComponent>;
  let ClienteService: ClienteService;

  const mockClientes = [
    { id: 1, nome: 'Zackson Wesner Rodriguez', email: 'zackson.rodriguez@caixa.gov.br', status: 'Ativo' },
    { id: 2, nome: 'João Paulo da Silva', email: 'joao.silva@caixa.gov.br', status: 'Inativo' },
    { id: 3, nome: 'Maria da silva', email: 'maria.silva@caixa.gov.br', status: 'Ativo' },
    { id: 4, nome: 'Paulo Matias da Silva', email: 'paulo.silva@caixa.gov.br', status: 'Inativo' },
    { id: 5, nome: 'Nicomedes da Silva', email: 'nicomedes.silva@caixa.gov.br', status: 'Ativo' },
    { id: 6, nome: 'Antonio da Silva', email: 'antonio.silva@caixa.gov.br', status: 'Inativo' },
    { id: 7, nome: 'José da Silva', email: 'jose.silva@caixa.gov.br', status: 'Ativo' }
    // Adicione mais clientes conforme necessário
  ];


  beforeEach(async () => {
    const clienteServiceSpy = jasmine.createSpyObj('ClienteService', ['getClientes']);
    clienteServiceSpy.getClientes.and.returnValue(of(mockClientes));

    await TestBed.configureTestingModule({
      providers: [{ provide: ClienteService, useValue: clienteServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaClientesComponent);
    component = fixture.componentInstance;

  });

  //it('should create', () => {
    //expect(component).toBeTruthy();
  //});

  it('Teste de Renderização do componente lista-clientes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(7);
    expect(rows[0].textContent).toContain('Zackson Wesner Rodriguez');
    expect(rows[0].textContent).toContain('zackson.rodriguez@caixa.gov.br');
    expect(rows[0].textContent).toContain('Ativo');
    expect(rows[1].textContent).toContain('João Paulo da Silva');
    expect(rows[1].textContent).toContain('joao.silva@caixa.gov.br');
    expect(rows[1].textContent).toContain('Inativo');
  });

});
