import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.route';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CardComponent } from '../shared/card/card.component';
import { ToolbarService } from './toolbar/toolbar.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    RouterModule.forRoot(HOME_ROUTE, { useHash: true, initialNavigation: true }),
  ],
  declarations: [
    HomeComponent,
    ToolbarComponent,
    CardComponent,
  ],
  providers: [
    ToolbarService,
  ],
})
export class HomeModule { }
