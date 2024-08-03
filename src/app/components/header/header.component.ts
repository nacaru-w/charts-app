import { AfterViewInit, Component } from '@angular/core';
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

  switchLanguage(language: Languages) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

}
