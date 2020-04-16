import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,

  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
  ],
  declarations: []
})
export class SharedModule { }
