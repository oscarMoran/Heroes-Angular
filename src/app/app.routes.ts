import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent } from './components/heroe/heroe.component';
import {SearchresultComponent} from './components/searchresult/searchresult.component';

const APP_ROUTES : Routes = [
    { path : '' , component: HomeComponent},
    { path : 'about' , component: AboutComponent},
    { path : 'heroes' , component: HeroesComponent},
    { path : 'heroe/:id' , component: HeroeComponent},
    { path : 'searchResult/:termino' , component: SearchresultComponent},
    { path : '**' , pathMatch :'full' , redirectTo : ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);