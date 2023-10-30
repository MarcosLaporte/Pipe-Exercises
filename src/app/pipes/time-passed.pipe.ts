import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

	transform(value: string, ...args: unknown[]): unknown {
		let now = Date.now();
		let before = Date.parse(value);

		const addLeadingZero = (num: number): string => (num < 10 ? '0' + num : num.toString());

		let millis = now - before;
		let seconds = Math.floor(millis / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		if (seconds >= 0 && seconds < 60) {
			return 'Just now';
		}

		if (seconds < 0) {
			return 'Thats the future :/';
		}

		if (days > 0) {
			return `${addLeadingZero(days)} days ${addLeadingZero(hours % 24)}hs ${addLeadingZero(minutes % 60)}min ${addLeadingZero(seconds % 60)} sec`;
		} else {
			return `${addLeadingZero(hours % 24)}hs ${addLeadingZero(minutes % 60)}min ${addLeadingZero(seconds % 60)} sec`;
		}
	}

}
