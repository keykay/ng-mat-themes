import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';

export type Theme = 'light' | 'dark' | 'grayscale';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light');

  public get currentTheme$(): Observable<Theme> {
    return this.theme$.pipe(
      distinctUntilChanged()
    );
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public applyTheme(theme: Theme): void {
    this.currentTheme$.pipe(
      take(1)
    ).subscribe(
      previous => {
        this.document.body.classList.remove(`${previous}-theme`);
        this.document.body.classList.add(`${theme}-theme`);
        this.theme$.next(theme);
      }
    );
  }
}
