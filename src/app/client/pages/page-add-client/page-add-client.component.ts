import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public addClient(item: Client) {
    this.clientService.addItem(item).subscribe(
      (response) => {
        this.router.navigate(['clients']);
      }
    )
  }

}
