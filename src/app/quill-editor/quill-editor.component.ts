import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import * as Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {

  quill: Quill;
  quillEditor: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.quillEditor = this.elementRef.nativeElement.children[0];
    this.quill = new Quill(this.quillEditor, Object.assign({
      theme: 'snow'
    }, {}));
  }

}
