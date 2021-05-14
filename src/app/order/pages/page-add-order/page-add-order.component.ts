import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public title: string = "Order";
  public subtitle: string = "Add";
  constructor(
    private orderService: OrderService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public add(item: Order) {
    this.orderService.addItem(item).subscribe(
      (response) => {
        // routing chemin absolue
        this.router.navigate(['orders']);
        // routing chemin relatif
        // this.router.navigate(['../', {relativeTo: this.route}])
      }
    )
  }

}
