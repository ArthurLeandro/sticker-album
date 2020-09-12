import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MenuComponent } from '../../components/menu/menu.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { NotificationBarComponent } from '../../components/notification-bar/notification-bar.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [MenuComponent, AlertComponent, NotificationBarComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    NgbModule,
    NgbCollapseModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [
    MenuComponent,
    AlertComponent,
    NotificationBarComponent,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
  ],
})
export class SharedModule {}
