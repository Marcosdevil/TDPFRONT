import { ModuleWithProviders } from '@angular/core';     //import para rotuer
import { Routes, RouterModule } from '@angular/router';  //import para rotuer

//import componentes 
import { PresentacionComponent} from './presentacion/presentacion.component';
import { BezingerTestComponent } from './bezinger-test/bezinger-test.component';   //importo la clase de cada componente
import { BtModo2Component} from './bt-modo2/bt-modo2.component';
import { BtModo3Component} from './bt-modo3/bt-modo3.component';
import { BtModo4Component} from './bt-modo4/bt-modo4.component';

import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [                                     //configuracion de cada ruta
    {path: '', component: PresentacionComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'bezinger', component: BezingerTestComponent},
    {path: 'bezinger2', component: BtModo2Component}, //definir rutas
    {path: 'bezinger3', component: BtModo3Component},
    {path: 'bezinger4', component: BtModo4Component},    
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); // agregar <any>


