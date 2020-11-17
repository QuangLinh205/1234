import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Weight } from 'src/app/core/Models/weight.model';
import {WeightService} from 'src/app/core/Services/weight.service';

@Component({
  selector: 'app-detail-weight',
  templateUrl: './detail-weight.component.html',
  styleUrls: ['./detail-weight.component.css']
})
export class DetailWeightComponent implements OnInit {
  weight: Weight = { id: null, deliveryCode: '', moocCode: '', sealCount: null, sealDes: '', lotNumber: '' };
isLoadingResults = true;
data: Weight[] = [];
  constructor(private route: ActivatedRoute, private weightService: WeightService, private router: Router) { }

  ngOnInit(): void {
    this.getWeightDetails(this.route.snapshot.params['id']);
  }

  getWeightDetails(id) {
    this.weightService.getById(id).subscribe(res => {
        this.data = res;
        // console.log("res");
      });
      
  }

}
