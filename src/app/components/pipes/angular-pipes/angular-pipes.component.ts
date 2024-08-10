import { 
  DatePipe, 
  LowerCasePipe, 
  UpperCasePipe, 
  JsonPipe, 
  AsyncPipe, 
  registerLocaleData,
  CurrencyPipe,
  DecimalPipe,
  PercentPipe
  } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

//PIPES com LOCALE LOCAL - passando local para configuração para usar ". e ," no formato brasileiro:
// import localePt from '@angular/common/locales/pt';
// registerLocaleData(localePt);

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe, 
    UpperCasePipe, 
    LowerCasePipe, 
    JsonPipe, 
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  //PIPES com LOCALE LOCAL - passando local para configuração para usar ". e ," no formato brasileiro:
  // providers:[{ provide: LOCALE_ID, useValue: 'pt-BR'}],
})
export class AngularPipesComponent {
  public date = signal( new Date())
  public uppercasePipe = signal( 'zackson wesner rodriguez')
  public lowercasePipe = signal('ZACKSON WESNER RODRIGUEZ')

  public json = signal([
      {
        name: 'Zackson Wesner Rodriguez',
        idade: 42

      }
  ])

  public loadingData$: Observable<string[]>=of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',

  ]).pipe(delay(3000));

}
