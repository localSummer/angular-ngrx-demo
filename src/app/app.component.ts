import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'newAngular';

    onClick(): void {
        console.log('test click');
    }

    onKey(event: KeyboardEvent): void {
        console.log((<HTMLInputElement>event.target).value);
    }
}
