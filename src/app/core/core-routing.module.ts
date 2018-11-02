/**
 * Created by wxw on 18-11-2.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {CompleteComponent} from './complete/complete.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'create',
        component: CreateComponent,
    },
    {
        path: 'complete',
        component: CompleteComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
