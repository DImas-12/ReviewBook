import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [BrowserModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookModule {}
