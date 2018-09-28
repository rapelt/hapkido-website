import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatExpansionModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule
  ],
})
export class MaterialModule { }
