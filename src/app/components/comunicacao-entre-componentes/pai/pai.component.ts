import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [CommonModule,InputComponent, OutputComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  public name = signal("propriedade do Compomente PAI - Enviado para filho");
  public outputName = signal("Output: Sem Dados recebidos do Componente Filho");
}
 