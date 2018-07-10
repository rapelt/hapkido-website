import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class MaterialModule { }
