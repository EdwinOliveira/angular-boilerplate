import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateResponseModel } from 'src/app/shared/models/responses/create-response.model';
import { DeleteResponseModel } from 'src/app/shared/models/responses/delete-response.model';
import { FetchResponseModel } from 'src/app/shared/models/responses/fetch-response.model';
import { UpdateResponseModel } from 'src/app/shared/models/responses/update-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly _serverURL: string;

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
    this._serverURL = environment.serverURL;
  }

  /** Fetch Bulk */

  public fetchBulkByHttpId<T>(routeURL: string, httpId: string): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}/${httpId}`);
  };

  public fetchBulkByHttpParams<T>(routeURL: string, httpParams: HttpParams): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  };

  public fetchBulkByHttpHeaders<T>(routeURL: string, httpHeaders: HttpHeaders): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}`, { headers: httpHeaders });
  };

  /** Fetch One */

  public fetchOneByHttpId<T>(routeURL: string, httpId: string): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}/${httpId}`);
  };

  public fetchOneByHttpParams<T>(routeURL: string, httpParams: HttpParams): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  };

  public fetchOneByHttpHeaders<T>(routeURL: string, httpHeaders: HttpHeaders): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}`, { headers: httpHeaders });
  };

  /** Create One */

  public createOne<T, K>(routeURL: string, httpBody: K): Observable<CreateResponseModel<T>> {
    return this._httpClient.post<CreateResponseModel<T>>(`${this._serverURL}/${routeURL}`, httpBody);
  }

  /** Update One */

  public updateOneByHttpId<T, K>(routeURL: string, httpId: string, httpBody: K): Observable<UpdateResponseModel<T>> {
    return this._httpClient.put<UpdateResponseModel<T>>(`${this._serverURL}/${routeURL}/${httpId}`, httpBody);
  }

  public updateOneByHttpParams<T, K>(routeURL: string, httpParams: HttpParams, httpBody: K): Observable<UpdateResponseModel<T>> {
    return this._httpClient.put<UpdateResponseModel<T>>(`${this._serverURL}/${routeURL}`, httpBody, { params: httpParams });
  }

  public updateOneByHttpHeaders<T, K>(routeURL: string, httpHeaders: HttpHeaders, httpBody: K): Observable<UpdateResponseModel<T>> {
    return this._httpClient.put<UpdateResponseModel<T>>(`${this._serverURL}/${routeURL}`, httpBody, { headers: httpHeaders });
  }

  /** Delete One */

  public deleteOneByHttpId<T, K>(routeURL: string, httpId: string,): Observable<DeleteResponseModel<T>> {
    return this._httpClient.delete<DeleteResponseModel<T>>(`${this._serverURL}/${routeURL}/${httpId}`);
  }

  public deleteOneByHttpParams<T, K>(routeURL: string, httpParams: HttpParams): Observable<DeleteResponseModel<T>> {
    return this._httpClient.delete<DeleteResponseModel<T>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }

  public deleteOneByHttpHeaders<T, K>(routeURL: string, httpHeaders: HttpHeaders): Observable<DeleteResponseModel<T>> {
    return this._httpClient.delete<DeleteResponseModel<T>>(`${this._serverURL}/${routeURL}`, { headers: httpHeaders });
  }
}
