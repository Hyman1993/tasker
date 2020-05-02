import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule,
  MdListModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  declarations: []
})
export class SharedModule { }
