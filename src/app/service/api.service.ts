import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  wakeUp() {
    return this.http.get(environment.apiUrl + '/')
  }

  postContactUsForm(data: any) {
    return this.http.post(environment.apiUrl + '/contact-us', data)
  }
}
