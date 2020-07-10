import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.scss']
})
export class DocloginComponent implements OnInit {
	address: any;
	password: any;
	about: any;

	constructor(private r: ActivatedRoute, private d: DataService, private f: FormBuilder) {}
	detail: any;
	iddoc: any;
	editpro: FormGroup;
	docdetailss: any;
	patdetails: any;
	changedoci: any;
	rawdoc: any;
	addd: any;
	emai: any;
	pass: any;
	loca: any;
	expe: any;
	avai: any;
	abou: any;
	feesd: any;
	accrejdata1: any;
	accrejdata2: any;

	ngOnInit() {
		this.editpro = this.f.group({
			add: new FormControl("", [Validators.required]),
			ema: new FormControl("", [Validators.required]),
			pas: new FormControl("", [Validators.required]),
			loc: new FormControl("", [Validators.required]),
			exp: new FormControl("", [Validators.required]),
			ava: new FormControl("", [Validators.required]),
			abo: new FormControl("", [Validators.required]),
			fee: new FormControl("", [Validators.required])
		})
		this.editpro.disable();

		localStorage.setItem('Email', '');
		localStorage.setItem('Password', '');
		//this.editpro.controls['add'].disable();

		this.r.params.subscribe(param => {
			//alert(param.id);
			this.iddoc = {
				id: param.id
			}
			this.d.ProfileServiceDLogin(this.iddoc).subscribe(res => {
				this.detail = res;
				console.log(this.detail);
				//alert(JSON.stringify(this.detail));
			})
			this.d.DocloginpatdetService(this.iddoc).subscribe(res => {
				this.patdetails = res;
				console.log(this.patdetails);
				//alert(JSON.stringify(this.patdetails));
			})
		})

	}

	edprof() {
		//alert("Edit profile eneter");
		this.editpro.controls['add'].enable();
		this.editpro.controls['pas'].enable();
		this.editpro.controls['abo'].enable();
		this.editpro.controls['fee'].enable();
	}

	myForm() {
		if (this.editpro.get('add').value == "") {
			this.addd = this.detail[0].Address
		} else {
			this.addd = this.editpro.get('add').value
		}

		if (this.editpro.get('pas').value == "") {
			this.pass = this.detail[0].Password
		} else {
			this.pass = this.editpro.get('pas').value
		}

		if (this.editpro.get('abo').value === "") {
			this.abou = this.detail[0].About
		} else {
			this.abou = this.editpro.get('abo').value
		}

		if (this.editpro.get('fee').value == "") {
			this.feesd = this.detail[0].Fees
		} else {
			this.feesd = this.editpro.get('fee').value
		}
		this.changedoci = {
			address: this.addd,
			password: this.pass,
			about: this.abou,
			fees: this.feesd,
			emails: this.detail[0].Email
		}

		//alert(JSON.stringify(this.changedoci));

		this.d.DocchangeSevice(this.changedoci).subscribe((res) => {
			console.log(res);
		})
	}

	done(a, b, c) {

		this.accrejdata1 = {
			dname: this.detail[0].Name,
			email: a,
			date: c,
			time: b
		}
		console.log(this.accrejdata1);
		this.d.AcceptapService(this.accrejdata1).subscribe((res) => {
			console.log(res);
			alert("appointment done");

			this.d.DelAppDataService(this.accrejdata1).subscribe((res) => {
				console.log("information has been deleted due to appointment booking");
				alert("information has been deleted due to appointment booking");
			})
		})
	}

	cancel(d, e, f) {
		this.accrejdata2 = {
			dname: this.detail[0].Name,
			email: d,
			date: f,
			time: e
		}
		console.log(this.accrejdata2);
		this.d.RejectapService(this.accrejdata2).subscribe((res) => {
			console.log(res);
			alert("Appointment canceled");

			this.d.DelAppDataService(this.accrejdata2).subscribe((res) => {
				console.log("information has been deleted due to appointment cancellation");
				alert("information has been deleted due to appointment cancellation");
			})
		})
	}
}
