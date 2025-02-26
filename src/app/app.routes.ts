import { Routes } from '@angular/router';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BangladeshFlagComponent } from './bangladesh-flag/bangladesh-flag.component';
import { NgsComponent } from './ngs/ngs.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';

export const routes: Routes = [
    {path: '', component: ProductInformationComponent},
    {path:'add', component: ProductInformationComponent},
    {path:'list', component: ProductListComponent},
    {path:'flag', component: BangladeshFlagComponent},
    {path:'ngs', component: NgsComponent},
    {path:'harry-potter', component: HarryPotterComponent},
    {path:'**', redirectTo: ''},
];