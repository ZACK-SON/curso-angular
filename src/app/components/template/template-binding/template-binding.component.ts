import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Zackson Wesner Rodriguez';
  public age = 41;

  public condition = this.age > 1 ? "Sim": "Não";

  public isDisabled = true;
  public srcValue = 'https://devporai.com.br/wp-content/uploads/2020/06/Copy-of-Copy-of-Travel-Photography.png';
    
  public isTextDecoration = this.age >= 41 ? 'underline' : 'none';
  
  //muda de nome após 1 segundo
  constructor(){  
    setTimeout(() => {
      this.name = 'ZACKSON WESNER RODRIGUEZ 1S DEPOIS';
    }, 1000);
  }
  public sum(num1: number,num2: number){
    return num1 + num2;
  }

  public ButtonSum(){
    return this.age++;
  }

  public ButtonSub(){
    return this.age--;
  }

  public onKeyDown(event: Event){
    return  console.log(event)
  }

  public onMouseEvent(event: MouseEvent){
    return  console.log({
      ClientX: event.clientX,
      ClientY: event.clientY,
    });
  }

}

