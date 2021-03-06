import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() item = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();
  public form: FormGroup;
  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      typePresta: [
        this.item.typePresta,
        Validators.required
      ],
      client: [
        this.item.client,
        Validators.compose(
          [Validators.required, Validators.minLength(2)]
        )
      ],
      comment: [this.item.comment],
      id: [this.item.id]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.form.value);
    this.clicked.emit(this.form.value);
  }

}
