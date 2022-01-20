import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { BookComponent } from './book.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BookRoutingModule } from './book-routing.module';
import { ElementDialogComponent } from '../element-dialog/element-dialog.component';



@NgModule({
  declarations: [
    BookComponent,
    ElementDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatTableModule,
    BookRoutingModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
})
export class BookModule { }

