import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share.module';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {petTagReducer} from './core/pet-tag.reducer';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ShareModule,
        StoreModule.forRoot({'petTag': petTagReducer}),
        CoreModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
