import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-tag-text',
    templateUrl: './tag-text.component.html',
    styleUrls: ['./tag-text.component.less']
})
export class TagTextComponent implements OnInit {
    tagTextInput = '';
    fontType = 'sans-serif';

    @Output()
    selectFontEvent = new EventEmitter<string>();

    @Output()
    addTextEvent = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    selectFont(fontType: string) {
        this.selectFontEvent.emit(fontType);
    }

    addText(text: string) {
        this.addTextEvent.emit(text);
    }

}
