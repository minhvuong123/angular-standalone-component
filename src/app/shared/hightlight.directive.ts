import { Directive, ElementRef } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = '#5f5aee';
    this._elementRef.nativeElement.style.color = 'black';
    this._elementRef.nativeElement.style.padding = '0.5rem';
  }
}