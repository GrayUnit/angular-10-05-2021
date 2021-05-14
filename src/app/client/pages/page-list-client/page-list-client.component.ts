import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  // public collectionClient: Client[] = [];
  public collectionClient$: Observable<Client[]>;
  public headers: string[] = [
    "Name",
    "CA",
    "State"
  ];
  public states: string[] = Object.values(StateClient);
  public btnRoute: Btn = {
    label: "Ajout d'un client",
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
  
  constructor(private clientService: ClientService) { 
    this.collectionClient$ = this.clientService.collection;
  }

  ngOnInit(): void {
    // this.clientService.collection.subscribe(
    //   (datas) => {
    //     this.collectionClient = datas;
    //     console.log(this.collectionClient[0].id);
    //   }
    // )
  }

  public changeState(item: Client, event: any) {
    this.clientService.changeState(item, event.target.value).subscribe(
      (res) => {
        item.state = res.state;
      }
    )
  }

  public openPopup() {
    console.log("alert");
  }

}
