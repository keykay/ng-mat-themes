import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService, Theme } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: Observable<string>;

  constructor(
    private themeService: ThemeService
  ) {
    this.theme$ = this.themeService.currentTheme$;
  }

  public switchThemeTo(next: Theme): void {
    this.themeService.applyTheme(next);
  }
}
