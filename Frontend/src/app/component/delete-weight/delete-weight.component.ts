import { Component, OnInit } from '@angular/core';
import { Weight } from 'src/app/core/Models/weight.model';
import {WeightService} from 'src/app/core/Services/weight.service';

@Component({
  selector: 'app-delete-weight',
  templateUrl: './delete-weight.component.html',
  styleUrls: ['./delete-weight.component.css']
})
export class DeleteWeightComponent implements OnInit {

  constructor() { }
  ngOnChange():void{
    
  }

  ngOnInit(): void {
  }

}
