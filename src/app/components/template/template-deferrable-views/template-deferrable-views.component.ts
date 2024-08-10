import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { ListaClientesComponent } from '../../lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent, ListaClientesComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

    public isTrue = false;
}
