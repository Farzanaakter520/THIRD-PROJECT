import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  localApiUrl = 'http://localhost:8081/name';

  constructor(private http: HttpClient) { }

  getAddress(): Observable<any> {
    return this.http.get<any[]>(this.localApiUrl);
  }

  callLocalApi(): Observable<String>{
    let params : HttpParams=new HttpParams();
    params=params.append('myname','Farzana');
    params=params.append('fatherName','Mohammed Ullah');
    return this.http.get(this.localApiUrl,{params:params,responseType:'text'});
  }
}
