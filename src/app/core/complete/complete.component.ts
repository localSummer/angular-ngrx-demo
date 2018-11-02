import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {RESET} from '../pet-tag.actions';
import {PetTag} from '../pet-tag.model';

@Component({
    selector: 'app-complete',
    templateUrl: './complete.component.html',
    styleUrls: ['./complete.component.less']
})
export class CompleteComponent implements OnInit, OnDestroy {
    tagState$: Observable<PetTag>;
    tagStateSubscription: Subscription;
    petTag: PetTag;

    constructor(private store: Store<PetTag>) {
        this.tagState$ = store.select('petTag');
    }

    ngOnInit() {
        this.tagStateSubscription = this.tagState$.subscribe((state) => {
            this.petTag = state; 
        });
    }

    ngOnDestroy() {
        this.tagStateSubscription.unsubscribe();
    }

    newTag() {
        this.store.dispatch({
            type: RESET,
        });
    }

}
