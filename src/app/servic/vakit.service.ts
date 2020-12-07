import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VakitService {

  constructor(private http: HttpClient) { }


  getVakit(il: string): Observable<any> {
    const url: string = 'https://api.collectapi.com/pray/all?data.city=' + il;
    return this.http.get<any>(url, {
      headers: {
        authorization: 'apikey 6LnblgDb9WAaGRn7Hwv7on:5BXbGLLtCwNakfcwqMncWB'
      }
    });
  }

  getIller(): Observable<any> {
    return this.http.get<any>("assets/iller.json");
  }


}
