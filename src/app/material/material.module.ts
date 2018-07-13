import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
