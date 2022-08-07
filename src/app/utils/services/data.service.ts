import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private request: RequestService) {
  }

  getUser() {
    const i: any = localStorage.getItem('78wfftyer');
    if (i != null) {
      return JSON.parse(i);
    }
    return null;
  }

  setUser(data: any) {
    localStorage.setItem('78wfftyer', JSON.stringify(data));
  }


   /*Projects*/
   setProjects(data: any) {
    localStorage.setItem('848592lks0', JSON.stringify(data));
  }

  getProjects(update: any=false) {
    let d:any=localStorage.getItem('848592lks0');
    if (d != null && !update) {
      return new Observable((observer) => {
        observer.next(JSON.parse(d));
        observer.complete();
      });
    }

    return this.request.get('project/projects');
  }









}
