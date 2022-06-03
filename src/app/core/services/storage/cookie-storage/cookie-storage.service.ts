import { Injectable } from '@angular/core';
import { TokenCollection } from 'src/app/shared/constants/collections/token.collection';
import { IStorage } from 'src/app/shared/interfaces/storage.interface';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService implements IStorage {

  constructor() { }

  public fetchToken<T>(name: TokenCollection): T | null {
    const token = localStorage.getItem(String(name));

    return token === null ? null : JSON.parse(token);
  };

  public createToken<T>(name: TokenCollection, data: T): void {
    return localStorage.setItem(String(name), JSON.stringify(data));
  };

  public removeToken(name: TokenCollection): void {
    return localStorage.removeItem(String(name));
  };

  public clear(): void {
    return localStorage.clear();
  };
}
