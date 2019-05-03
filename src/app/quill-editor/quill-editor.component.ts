import { DEFAULT_QUILL_CONFIG } from './quillConfig';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import * as Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {

  @Input() options: Object;
  quill: Quill;
  quillEditor: HTMLElement;
  quillToolbar: HTMLElement;

  editorElem: HTMLElement;
  content: any;
  defaultModules = DEFAULT_QUILL_CONFIG;

  customButtons = [
    {type: 'client_name', label: 'Client Name', action: this.clientNameAction.bind(this)}
  ];

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.createQuillEditorElement();
    this.initQuillEditor();
  }

  createQuillEditorElement() {
    this.quillToolbar = this.elementRef.nativeElement.children[0];
    this.quillEditor = this.elementRef.nativeElement.children[1];
  }

  initQuillEditor() {
    this.quill = new Quill(this.quillEditor, Object.assign({
      modules: {
        toolbar: this.quillToolbar
      },
      placeholder: 'Insert text here ...',
      readOnly: false,
      theme: 'snow',
      boundary: document.body
    }, this.options || {}));
    this.quill.on('text-change', this.emitQuillText.bind(this));
  }

  emitQuillText() {
    console.log(this.quill.root.innerHTML);
  }

  clientNameAction() {
    const selection = this.quill.getSelection(true);
    this.quill.insertText(selection.index, '{{ client_name }}');
  }

}
