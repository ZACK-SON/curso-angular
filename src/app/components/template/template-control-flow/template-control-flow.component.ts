import { Component } from '@angular/core';
import { AsyncPipe, NgIf,NgFor, NgSwitch } from '@angular/common';
import { Observable, delay,of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgSwitch],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = false;
  //a variável itens é um objeto
  public itens = [{ name: 'ZACKSON WESNER RODRIGUEZ'}];

 

  public loadingData$: Observable<string[]>=of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',

  ]).pipe(delay(3000));

  public addNewName(value: string){
    return this.itens.push({ name: value });
  }
    

   //variável vazia precisa ser "tipada" para não dar "pau"
   public arrayEmpty: Array<{name: string}> = [];
 
  public addNewNameArrayEmpty(value: string){
    console.log(value);
    return this.arrayEmpty.push({ name: value });
   
  }

  public switchCondition = 'D';
}
