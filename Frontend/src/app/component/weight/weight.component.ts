import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weight } from 'src/app/core/Models/weight.model';
import {WeightService} from 'src/app/core/Services/weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
weight:Weight[];
  isLoadingResults: boolean;
  constructor(private weightservice: WeightService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.weightservice.getAll().subscribe((res:any)=>{
      this.weight = res
      // console.log(this.weight);
    })  
  }

  deleteWeight(id) {
    alert("da xoa thanh cong, load lai trang de thay thay doi")
    this.isLoadingResults = true;
    this.weightservice.deleteWeight(id)
      .subscribe(res => {
          this.isLoadingResults = false;
        }
      );
  }
// btnClick= function () {
//   this.router.navigateByUrl('update');
//   alert("123")
// }
}
