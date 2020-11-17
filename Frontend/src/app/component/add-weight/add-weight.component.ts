import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Weight } from 'src/app/core/Models/weight.model';
import { WeightService } from 'src/app/core/Services/weight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {
  weightForm: FormGroup;
  deliveryCode: string = '';
  moocCode: string = '';
  sealCount: number = null;
  sealDes: string = '';
  lotNumber: string = '';
  isLoadingResults = false;
  constructor(private router: Router, private weightService: WeightService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.weightForm = this.formBuilder.group({
      'deliveryCode': [null, Validators.required],
      'moocCode': [null, Validators.required],
      'sealCount': [null, Validators.required],
      'sealDes': [null, Validators.required],
      'lotNumber': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.weightService.addWeight(form)
      .subscribe(res => {
        this.isLoadingResults = false;
      });
  }

}
