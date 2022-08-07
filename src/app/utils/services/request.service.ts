import { API_SERVER } from './../constantes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(API_SERVER + url);
  }

  post(url: string, data: any) {
    return this.http.post(API_SERVER + url, data);
  }

  put(url: string, data: any) {
    return this.http.put(API_SERVER + url, data);
  }

  delete(url: string) {
    return this.http.delete(API_SERVER + url);
  }

  getFromFullURL(url: string) {
    return this.http.get(url);
  }


  getFile(url: string, data: any) {
    return this.http.post(API_SERVER + url, data, { responseType: 'blob' });
  }

  saveFile(formData: any, url: string) {
    return this.http.post(API_SERVER + url, formData, {
      headers: new HttpHeaders({
        Accept: 'application/json'
      }), reportProgress: true, observe: 'events'
    });
  }

}
