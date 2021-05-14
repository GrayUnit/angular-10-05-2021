import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public collection: Order[] = [];
  public collectionOrder$: Observable<Order[]>;
  public title: string = "";
  public subtitle: string = "";
  public headers: string[] = [
                              "Type",
                              "Client",
                              "NbJours",
                              "TjmHt",
                              "Total Ht",
                              "Total Ttc",
                              "State",
                              "Comment",
                              "Actions"
                            ];
  public states = Object.values(StateOrder);
  public btnRoute: Btn = {
    label: "Ajout d'un order",
    route: "add" 
  };
  public btnHref: Btn = {
    label: "Go to google",
    href: "http://www.google.fr"
  };
  public btnAction: Btn = {
    label: "Open popup",
    action: true
  };
  // private sub: Subscription = new Subscription();

  constructor(private orderService: OrderService) { 
    this.collectionOrder$ = this.orderService.collection;
  }
  test: string[] = [];

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Listing orders";
    this.orderService.collection.subscribe(
      (datas) => {
        this.collection = datas;
      }
    )
  }


  public changeState(item: Order, event: any) {
    this.orderService.changeState(item, event.target.value).subscribe(
      (res) => {
        item.state = res.state;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("finally");
      }
    )
  }

  public deleteOrder(id: number) {
    this.orderService.deleteItem(id).subscribe(
      (res) => {
        this.orderService.collection.subscribe(
          (datas) => {
            this.collection = datas;
          }
        )
      }
    )
  }

  public openPopup() {
    alert("Hey");
    console.log("function called");
  }

  // ngOnDestroy() {
  //   // this.sub.unsubscribe();
  // }

}
