import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {
    console.log('dataservice terhubung');
  }
  public getAreas(): Promise<any> {
    return (
      this.httpClient
        // .get(`https://jsonplaceholder.typicode.com/posts`)
        .get(`http://localhost:1337/bukus`)
        .toPromise()
    );
  }
}
