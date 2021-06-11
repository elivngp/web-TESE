
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { ServiciosocialComponent } from './components/sections/admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './components/sections/admisiontramites/titulacion/titulacion.component';

import { AdmisiontramitesComponent } from './components/sections/admisiontramites/admisiontramites.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'admisiontramites',component: AdmisiontramitesComponent},
    {path: 'serviciosocial',component: ServiciosocialComponent },
    {path: 'titulacion',component: TitulacionComponent}



];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
