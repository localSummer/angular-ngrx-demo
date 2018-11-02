import {NgModule} from '@angular/core';
import {ShareModule} from '../share.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { CompleteComponent } from './complete/complete.component';
import {CoreRoutingModule} from './core-routing.module';
import { TagShapeComponent } from './create/tag-shape/tag-shape.component';
import { TagTextComponent } from './create/tag-text/tag-text.component';
import { TagExtrasComponent } from './create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './common/tag-preview/tag-preview.component';

@NgModule({
    declarations: [
        HomeComponent,
        CreateComponent,
        CompleteComponent,
        TagShapeComponent,
        TagTextComponent,
        TagExtrasComponent,
        TagPreviewComponent,
    ],
    imports: [
        ShareModule,
        CoreRoutingModule,
    ],
    providers: [],
})
export class CoreModule {
}
