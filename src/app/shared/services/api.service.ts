import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  // private getCredentials() {
  //   // base64 encoding required
  //   return btoa(environment.DB_KEY+':'+environment.DB_PASSWORD);
  // }

  private setHeaders(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Basic ${this.getCredentials()}`
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    console.log(error);
    return Observable.throw(error);
  }

  post(body: Object = {}): Observable<any> { 
    console.log("Body", body, environment.DB_API_URL);
    return this.http.post(`${environment.DB_API_URL}/travelapp/`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors);
  }

  getAll() : Observable<any> {
    return this.get('_all_docs?include_docs=true', {});
  }

  get(path: string, params: {}): Observable<any> {
    return this.http.get(`${environment.DB_API_URL}/travelapp/${path}`, { headers: this.setHeaders(), params: new HttpParams(params)})
      .catch(this.formatErrors)
      .map((res:Response) => res);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put( `${environment.DB_API_URL}/travelapp/${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res);
  }

  delete(path): Observable<any> {
   console.log("Delete", path);
   return this.http.delete(`${environment.DB_API_URL}/travelapp/${path}`, { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res:Response) => res);
}

}