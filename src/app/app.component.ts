import { Component } from '@angular/core';
// CommonModule funciona nas versões antigas
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router';


//componentes
//import { NewComponent } from './components/new-component/new-component.component';
//import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
//import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
//import { TemplateControlFlowComponent }  from './components/template/template-control-flow//template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiComponent } from './components/comunicacao-entre-componentes/pai/pai.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    //NewComponent,
    //TemplateBindingComponent, 
    //TemplateVariablesComponent,
    //TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    ListaClientesComponent,
    SignalsComponent,
    PaiComponent,
    AngularPipesComponent
  ],
  template:`
    <!-- <router-outlet />  -->
    <h1>Curso de Angular</h1>
    <!-- <app-template-control-flow> -->
    <!--<app-template-binding /> -->
    <!-- <app-template-variables/> -->
     <!-- <app-template-deferrable-views> -->
      <!-- <app-lista-clientes/> -->

      <!-- <app-signals/> -->
       <!-- <app-pai/> -->
        <app-angular-pipes/>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';


}
