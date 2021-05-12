import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { 
    this.pCollection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((tab) => {
        return tab.map((item) => {
          return new Order(item);
        })
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

}
