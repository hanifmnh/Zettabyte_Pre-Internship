import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    console.log('good');
  }
}
