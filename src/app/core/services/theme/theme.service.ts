import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeCollection } from 'src/app/shared/constants/collections/theme.collection';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  constructor() {
    this._state = new BehaviorSubject<ThemeCollection>(this._defineBaseTheme());
    this._state$ = this._state.asObservable();
  }

  private _defineBaseTheme(): ThemeCollection {
    return ThemeCollection.DARK_THEME;
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  public updateTheme(theme: ThemeCollection): void {
    return this._state.next(theme);
  }
}
