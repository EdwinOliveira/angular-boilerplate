import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/abstracts/storage.service.abstract';
import { ThemeCollection } from 'src/app/shared/constants/collections/theme.collection';
import { TokenCollection } from 'src/app/shared/constants/collections/token.collection';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  constructor(
    private readonly _storageService: StorageService,
  ) {
    this._state = new BehaviorSubject<ThemeCollection>(this._defineBaseTheme());
    this._state$ = this._state.asObservable();
  }

  private _defineBaseTheme(): ThemeCollection {
    const themeToken = this._storageService.fetchToken<ThemeCollection>(TokenCollection.THEME);

    if (themeToken !== null) {
      return themeToken;
    }

    this._storageService.createToken(TokenCollection.THEME, ThemeCollection.DARK_THEME);

    return ThemeCollection.DARK_THEME;
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  public updateTheme(theme: ThemeCollection): void {
    return this._state.next(theme);
  }
}
