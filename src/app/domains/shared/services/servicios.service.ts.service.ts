
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioServiceTsService {
  private http = inject(HttpClient)

  constructor() { }

  getServicios() {
    return this.http.get('');
  }
}
