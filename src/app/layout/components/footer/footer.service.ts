import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService implements OnDestroy {

  private readonly _state: BehaviorSubject<boolean>;
  private readonly _state$: Observable<boolean>;

  constructor() {
    this._state = new BehaviorSubject<boolean>(true);
    this._state$ = this._state.asObservable();
  }

  ngOnDestroy(): void {
    this._state.unsubscribe();
    this._state.complete();
  }

  public get state$(): Observable<boolean> {
    return this._state$;
  }

  public updateState(state: boolean) {
    this._state.next(state);
  }
}
