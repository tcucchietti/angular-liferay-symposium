import { Component } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  name= '';
  configurableVariable = environment.configurableVariable;

}
