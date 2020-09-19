import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdDatepickerModule,
  MdRadioModule, MdNativeDateModule, MdSelectModule, MdSidenavModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule
  ],
  entryComponents: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent]
})
export class SharedModule { }
