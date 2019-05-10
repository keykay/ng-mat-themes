import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './components/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Observable } from 'rxjs';
import { ThemeService, Theme } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  theme$: Observable<string>;

  options: FormGroup;
  animal: string;
  name: string;

  constructor(
    private themeService: ThemeService,
    fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.theme$ = this.themeService.currentTheme$;
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  public switchThemeTo(next: Theme): void {
    this.themeService.applyTheme(next);
  }
}
