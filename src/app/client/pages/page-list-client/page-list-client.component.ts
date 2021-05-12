import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public collectionClient: Client[] = [];
  public headers: string[] = [
    "Name",
    "CA",
    "State"
  ];
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (datas) => {
        this.collectionClient = datas;
        console.log(this.collectionClient[0].id);
      }
    )
  }

}
