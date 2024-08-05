/**
 * Componente MainComponent
 * 
 * Proporciona una breve descripción de la función de la página web
 */

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
