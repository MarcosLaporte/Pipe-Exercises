import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'longText'
})
export class LongTextPipe implements PipeTransform {

	transform(value: string, maxChar: number = 7): unknown {
		maxChar = maxChar > 0 ? maxChar : 1;
		
		let strAux = value;
		if (value.length > maxChar) {
			strAux = value.slice(0, maxChar);
			strAux += '...';
		}
		return strAux;
	}

}
