import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { 
    this.pCollection = this.http.get<Order[]>(`${this.urlApi}orders`);
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

}
