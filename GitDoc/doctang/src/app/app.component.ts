import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'doctang';

	constructor(private k: Router, private d: DataService, private f: FormBuilder) {};
	validatingForm: FormGroup;
	loginForm: FormGroup;
	selectedValue: string;
	selectedSpec: string;
	spectyp = new FormControl();
	loctyp = new FormControl();
	signupdet: any;
	logidata: any;
	radioform: FormGroup;
	radiobt: any;
	logentdet: any;
	doctorlog: any;


	specc: string[] = ['Anesthesiologists',
		'Cardiologists',
		'Dermatologists',
		'Gastroenterologists',
		'Endocrinologists',
		'Hematologists',
		'Internists',
		'Neurologists',
		'Nephrologists',
		'Oncologists',
		'Ophthalmologists',
		'Otolaryngologists',
		'Pathologists',
		'Pediatricians',
		'Physiatrists',
		'Urologists'
	];

	locc: string[] = ['Ahmedabad',
		'Mumbai',
		'Delhi',
		'Agra',
		'Bangalore',
		'Bhilwara',
		'Kolkata',
		'Chennai',
		'Hyderabad',
		'Jaipur',
		'Dedhradun',
		'Ajmer',
		'Pune',
		'Indore',
		'Chandigarh'
	];

	filteredSpec: Observable < string[] > ;
	filteredLocs: Observable < string[] > ;

	ngOnInit() {
		this.radioform = this.f.group({
			radvalue: new FormControl('', Validators.required)
		})

		this.validatingForm = new FormGroup({
			signupFormModalName: new FormControl('', Validators.required),
			signupFormModalEmail: new FormControl('', Validators.email),
			signupFormModalPassword: new FormControl('', Validators.required),
		});
		this.loginForm = new FormGroup({
			loginFormModalEmail: new FormControl('', Validators.email),
			loginFormModalPassword: new FormControl('', Validators.required)
		});
		this.filteredSpec = this.spectyp.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);
		this.filteredLocs = this.loctyp.valueChanges.pipe(
			startWith(''),
			map(value => this._filter1(value))
		);
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

	get loginFormModalEmail() {
		return this.loginForm.get('loginFormModalEmail');
	}

	get loginFormModalPassword() {
		return this.loginForm.get('loginFormModalPassword');
	}

	private _filter(value: string): string[] {
		const filterValue = this._normalizeValue(value);
		return this.specc.filter(typo => this._normalizeValue(typo).includes(filterValue));
	}

	private _filter1(value: string): string[] {
		const filterValue = this._normalizeValue1(value);
		return this.locc.filter(loco => this._normalizeValue1(loco).includes(filterValue));
	}

	private _normalizeValue(value: string): string {
		return value.toLowerCase().replace(/\s/g, '');
	}

	private _normalizeValue1(value: string): string {
		return value.toLowerCase().replace(/\s/g, '');
	}

	LocSpeSub() {
		console.log(this.spectyp.value);
		console.log(this.loctyp.value);
		this.k.navigate(["/booking", this.spectyp.value, this.loctyp.value]);

	}

	subbut() {
		this.signupdet = JSON.stringify(this.validatingForm.value);
		console.log(this.signupdet);
		this.d.SignupDetService(this.validatingForm.value).subscribe(res => {
			if (res) {
				// alert(JSON.stringify(res));
				alert("Signed Up Successfully");
			}

		})
	}

	logbut() {
		this.logentdet = {
			email: this.loginFormModalEmail.value,
			password: this.loginFormModalPassword.value,
			typer: this.radioform.get('radvalue').value
		}
		console.log(this.logentdet);

		console.log(this.radioform.get('radvalue').value);
		this.radiobt = this.radioform.get('radvalue').value;

		if (this.radiobt == "patient") {
			this.d.LoginDetPatService(this.logentdet).subscribe(res => {
				if (res) {
					localStorage.setItem('Email', this.loginFormModalEmail.value);
					localStorage.setItem('Password', this.loginFormModalPassword.value);
					alert("Login Success");
				} else {
					alert("Invalid Credentials");
				}
			})
		} else if (this.radiobt == "doctor") {
			this.d.LoginDetDocService(this.logentdet).subscribe(res => {
				if (res == 0) {
					alert("Invalid Credenetials");
				} else {
					this.doctorlog = res;
					console.log(this.doctorlog);
					// alert(JSON.stringify(res));

					localStorage.setItem('Email', this.loginFormModalEmail.value);
					localStorage.setItem('Password', this.loginFormModalPassword.value);

					this.k.navigate(["/doctorlogin", (this.doctorlog)[0].ID]);
				}
			})

		} else {
			alert("U must have to select the Radio button first to proceed");
		}
  }
 
} 
