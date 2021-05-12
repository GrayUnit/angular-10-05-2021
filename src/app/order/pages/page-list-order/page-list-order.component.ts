import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public collectionOrder: Order[] = [];
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

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Listing orders";
    this.orderService.collection.subscribe(
      (datas) => {
        this.collectionOrder = datas;
        console.log(this.collectionOrder);
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

}
