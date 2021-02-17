import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatAlpabets]'
})
export class FormatAlpabetsDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-z-A-Z ]/g, "").replace(/ +/, " ")

  }

}