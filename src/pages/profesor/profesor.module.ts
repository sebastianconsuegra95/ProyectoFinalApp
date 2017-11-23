import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfesorPage } from './profesor';

@NgModule({
  declarations: [
    ProfesorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfesorPage),
  ],
})
export class ProfesorPageModule {}
