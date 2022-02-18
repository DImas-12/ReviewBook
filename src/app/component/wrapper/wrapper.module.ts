import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  imports: [],
  declarations: [WrapperComponent],
  exports: [WrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WrapperModule {}
