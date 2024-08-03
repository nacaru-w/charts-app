import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    NgbNavModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netberry-exercise';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    // Use browser language if available
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|fr|es/) ? browserLang : 'en');
  }

}
