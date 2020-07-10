import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
idd:any;
profiledata:any;
special:any;
specialitydata:any;
arrdata1:any;
arrdata2:any;
  constructor(private a:ActivatedRoute,private d:DataService,private r:Router) { }

  ngOnInit() {
    this.a.params.subscribe((para)=>{
    this.idd=para.id;
    this.special=para.spec;
    this.profiledata={
      profileinfo:this.idd
    }
    this.specialitydata={
      speciality:this.special
    }
    this.d.ProfileService(this.profiledata).subscribe(res=>{
      console.log(res);
      this.arrdata1=res;
      //alert(JSON.stringify(res));
    })
    this.d.SpcialityService(this.specialitydata).subscribe(res=>{
      console.log(res);
      this.arrdata2=res;
      //alert(JSON.stringify(res));
    })

    })
    
  }
   appoint(){
    this.r.navigate(['appointment',this.idd]);
  }
}


