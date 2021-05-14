import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {

  public form: FormGroup;
  @Input() client: Client = new Client();
  @Output() submitted: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [this.client.name, Validators.required],
      ca: [this.client.ca],
      state: [this.client.state]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }

}
