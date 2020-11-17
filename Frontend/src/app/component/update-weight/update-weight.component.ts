import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Weight } from 'src/app/core/Models/weight.model';
import {WeightService} from 'src/app/core/Services/weight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-weight',
  templateUrl: './update-weight.component.html',
  styleUrls: ['./update-weight.component.css']
})
export class UpdateWeightComponent implements OnInit, OnChanges {
  data: Weight[] = [];
WeightForm: FormGroup;
id:number=null;
deliveryCode:string='';
moocCode:string='';
sealCount:number=null;
sealDes:string='';
lotNumber:string='';
isLoadingResults = false;

  constructor(private weightservice: WeightService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getWeight(this.route.snapshot.params['id']);
  this.WeightForm = this.formBuilder.group({
    'id' : [null, Validators.required],
    'deliveryCode' : [null, Validators.required],
    'moocCode' : [null, Validators.required],
    'sealCount' : [null, Validators.required],
    'sealDes' : [null, Validators.required],
    'lotNumber' : [null, Validators.required]
  });
  }
  getWeight(id) {
    this.weightservice.getById(id).subscribe(data => {
      this.id = data[0].id;
      this.WeightForm.setValue({
        id: data[0].id,
        deliveryCode: data[0].deliveryCode,
        moocCode: data[0].moocCode,
        sealCount: data[0].sealCount,
        sealDes: data[0].sealDes,
        lotNumber: data[0].lotNumber
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.weightservice.updateWeight(form)
      .subscribe(res => {
        this.isLoadingResults = false;
        }
      );
  }

}
