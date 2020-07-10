import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
lo:any;
sp:any;
finaldata:any;
arrdata:any;
indexp:any;

validatingForm: FormGroup;


  constructor(private r:ActivatedRoute,private d:DataService,private q:Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
    
    this.r.params.subscribe(para=>{
      this.lo=para.locat;
      this.sp=para.specia;
      console.log(this.lo);
      console.log(this.sp);
      this.finaldata={
        locations:this.lo,
        specialisations:this.sp
      }
    
    this.d.DoctordataService(this.finaldata).subscribe((res)=>{
    // alert("finally suceded");
     this.arrdata=res;
     console.log(JSON.stringify(this.arrdata));
    // alert(JSON.stringify(this.arrdata));
    })

    })

  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }
  profile(rd,sd){
    
    this.q.navigate(["/profile",rd,sd]);
    // alert("into profile section");
  }
  appoint(se){
    this.q.navigate(["/appointment",se])
    // alert("into appointment section");
  }
 


}
