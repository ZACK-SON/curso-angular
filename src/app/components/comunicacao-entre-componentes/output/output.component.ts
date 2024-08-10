import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputName = new EventEmitter();

  public sendOutputName(){
      //Envia o dado para "fora" do componente
      return this.outputName.emit("Output - Dado enviado do componente filho para o PAI")
  }

}
 