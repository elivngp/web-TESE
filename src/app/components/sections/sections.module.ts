import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { ServiciosocialComponent } from './admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './admisiontramites/admisiontramites.component';




@NgModule({
  declarations: [
    HomeComponent,
    ServiciosocialComponent,
    TitulacionComponent,
    AdmisiontramitesComponent



  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SectionsModule { }
