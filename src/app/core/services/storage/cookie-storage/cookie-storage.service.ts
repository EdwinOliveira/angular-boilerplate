import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/shared/abstracts/storage.service.abstract';
import { TokenCollection } from 'src/app/shared/constants/collections/token.collection';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService extends StorageService {

  constructor() {
    super();
  }

  public override fetchToken<T>(name: TokenCollection): T | null {
    const token = localStorage.getItem(String(name));

    return token === null ? null : JSON.parse(token);
  };

  public override createToken<T>(name: TokenCollection, data: T): void {
    return localStorage.setItem(String(name), JSON.stringify(data));
  };

  public override removeToken(name: TokenCollection): void {
    return localStorage.removeItem(String(name));
  };

  public override clear(): void {
    return localStorage.clear();
  };
}
