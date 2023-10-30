import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charMask'
})
export class CharMaskPipe implements PipeTransform {

  transform(value: string, char: string): unknown {
		if (char.length < 1) return null;
		
		char = char.charAt(0);
		return char.repeat(value.length);
  }

}
