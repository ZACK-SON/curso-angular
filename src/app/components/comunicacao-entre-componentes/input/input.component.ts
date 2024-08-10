import { CommonModule } from '@angular/common';
import { Component, Input, signal} from '@angular/core';

function toUpperCase(value: string){
  return value.toLocaleUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})


// Sem SIGNAL

// export class InputComponent {
//   @Input( { 

//     alias: "abacaxi",
//     required: true,
//     transform: toUpperCase

//   } ) 

//   public inputName: string = 'Sem dados do componente PAI';

// }


// Com SIGNAL

export class InputComponent {


  public name = signal("Sem dados do componente PAI")

  @Input( { 

    // alias: "abacaxi"
    required: true,
    transform: toUpperCase

  } ) set inputName(value: string){
    this.name.set(value);
  }


  

}