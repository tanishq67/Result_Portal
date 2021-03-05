import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  getPoolA(): Observable<any> {
    return this.http.get('/assets/pool-a.json');
  }

  getPoolB(): Observable<any> {
    return this.http.get('/assets/pool-b.json'); 
  }
  
  getPoolC(): Observable<any> {
    return this.http.get('/assets/pool-c.json');
  }


}
