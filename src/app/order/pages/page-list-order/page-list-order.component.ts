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

  // public collectionOrder: Order[] = [];
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
                              "Comment"
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

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Listing orders";
    // this.sub = this.orderService.collection.subscribe(
    //   (datas) => {
    //     this.collectionOrder = datas;
    //     console.log(this.collectionOrder);
    //   }
    // )
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

  public openPopup() {
    alert("Hey");
    console.log("function called");
  }

  // ngOnDestroy() {
  //   // this.sub.unsubscribe();
  // }

}
