import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.scss']
})
export class AppointComponent implements OnInit {
	latest_date: any;
	todayDate: Date = new Date();

	timeav: string[] = ['9 AM',
		'10 AM',
		'11 AM',
		'12 PM',
		'2 PM',
		'4 PM',
		'6 PM',
		'8 PM',
		'9 PM'
	]

	filteredTime: Observable < string[] > ;
	constructor(private d: DataService, private r: Router, private ar: ActivatedRoute) {}
	dates = new FormControl();
	timetyp = new FormControl();
	txtar = new FormControl();

	appdata: any;
	tim: any;
	lemail: any;
	lpassw: any;
	ldata: any;
	idforc: any;

	ngOnInit() {

		this.ar.params.subscribe(param => {
			this.idforc = param.id;
		})

		this.filteredTime = this.timetyp.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);

	}
	private _filter(value: string): string[] {
		const filterValue = this._normalizeValue(value);
		return this.timeav.filter(typo => this._normalizeValue(typo).includes(filterValue));
	}
	private _normalizeValue(value: string): string {
		return value.toLowerCase().replace(/\s/g, '');
	}

	Pay() {
		console.log(this.timetyp.value);
		console.log(this.dates.value);
		this.tim = this.timetyp.value;

		function Convert(str) {
			var date = new Date(str),
				mnth = ("0" + (date.getMonth() + 1)).slice(-2),
				day = ("0" + date.getDate()).slice(-2);
			return [day, mnth, date.getFullYear()].join("/");
		}

		this.latest_date = Convert(this.dates.value);
		console.log(this.latest_date);

		this.lemail = localStorage.getItem('Email');
		this.lpassw = localStorage.getItem('Password');

		localStorage.setItem('Email', '');
		localStorage.setItem('Password', '');

		this.appdata = {
			bdata: this.latest_date,
			btim: this.tim,
			btext: this.txtar.value,
			bemail: this.lemail,
			bid: this.idforc
		}

		console.log(this.appdata);

		if (this.lemail == '' || this.lpassw == '' || this.lemail == null || this.lpassw == null) {
			alert("You need to first Log in to proceed ahead");
			this.r.navigate([" "]);
		} else {
			this.ldata = {
				emaillocal: this.lemail,
				passwlocal: this.lpassw
			}
			this.d.LocalCheckService(this.ldata).subscribe(res => {
				if (res == 0) {
					alert("err finding data");
				}
				if (res == 1) {
					alert("You can now proceed to pay");
					this.d.AppointService(this.appdata).subscribe(res1 => {
						console.log(res1);
						if (res == 0) {
							alert("err inserting appoitment data");
						}
						if (res == 1) {
							alert("Appointment Booked successfully. Wait for the official confirmation from the doctor");
							this.dates.setValue('');
							this.timetyp.setValue('');
							this.txtar.setValue('');
						}
					})
				}

			})
		}
	}
}