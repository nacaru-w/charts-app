/**
 * Componente HeaderComponent
 * 
 * Es responsable de renderizar el encabezado de la aplicación, proporcionando 
 * navegación y selección de idioma. Utiliza @ng-bootstrap para la funcionalidad de navegación 
 * y menús desplegables, y @ngx-translate/core para la internacionalización.
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, RouterLink, NgbDropdownModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
  }

  /**
  * Se encarga de cambiar el idioma cuando se selecciona en el menú
  * del encabezado.
  * @param language: el idioma elegido (en código de idioma);
  */
  switchLanguage(language: Languages): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

}
