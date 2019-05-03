import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {}

  transform(v: string , args?: any): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

}
