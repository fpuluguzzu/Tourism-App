import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
