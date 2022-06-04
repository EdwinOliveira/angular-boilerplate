import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AbstractStorageService } from 'src/app/shared/abstracts/storage.service.abstract';
import { ThemeCollection } from 'src/app/shared/constants/collections/theme.collection';
import { TokenCollection } from 'src/app/shared/constants/collections/token.collection';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  constructor(
    private readonly _storageService: AbstractStorageService,
  ) {
    this._state = new BehaviorSubject<ThemeCollection>(this._defineBaseTheme());
    this._state$ = this._state.asObservable();
  }

  private _defineBaseTheme(): ThemeCollection {
    const token = this._storageService.fetchToken<ThemeCollection>(TokenCollection.THEME);
    const baseTheme = token === null ? ThemeCollection.LIGHT_THEME : token;

    this._storageService.createToken(TokenCollection.THEME, baseTheme);

    return baseTheme;
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  public updateTheme(theme: ThemeCollection): void {
    return this._state.next(theme);
  }
}
