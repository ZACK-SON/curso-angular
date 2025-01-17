import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [TesteComponent],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public newComponentName = 'Zackson Wesner Rodriguez - NewComponent';
  public srcNewComponentImage = '../new-component/images/novoComponente.png';
}
