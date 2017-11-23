import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudiantePage } from './estudiante';

@NgModule({
  declarations: [
    EstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(EstudiantePage),
  ],
})
export class EstudiantePageModule {}
