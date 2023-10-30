import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
})
export class FormComponent {
	ngPipes: FormGroup;

	constructor(private fb: FormBuilder, private router: Router) {
		this.ngPipes = fb.group({
			upperCase: ['', Validators.required],
			lowerCase: ['', Validators.required],
			date: ['', Validators.required],
			currency: [0, Validators.required],
			decimal: [0, Validators.required],
			percent: [0, Validators.required],
		});
	}

}
