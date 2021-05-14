import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-update',
  templateUrl: './icon-update.component.html',
  styleUrls: ['./icon-update.component.scss']
})
export class IconUpdateComponent implements OnInit {

  public myIcon = faPen;
  constructor() { }

  ngOnInit(): void {
  }

}
