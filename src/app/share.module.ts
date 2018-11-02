/**
 * Created by wxw on 18-11-2.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
})
export class ShareModule {
    
}

