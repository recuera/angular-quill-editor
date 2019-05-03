import { DEFAULT_QUILL_CONFIG, CUSTOM_VARIABLE_BUTTONS } from './quillConfig';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';

import * as Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => QuillEditorComponent),
    }
  ]
})
export class QuillEditorComponent implements OnInit {

  quill: Quill;
  quillEditor: HTMLElement;
  quillToolbar: HTMLElement;

  editorElem: HTMLElement;
  quillContent = '';

  @Input() customButtons = CUSTOM_VARIABLE_BUTTONS;

  @Input() set ngModel (ngModel: string) {
    if (ngModel) {
      this.quillContent = ngModel;
    }
  }
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.createQuillEditorElement();
    this.initQuillEditor();
    this.setInitialContent();
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
    }, {}));

    Quill.register(Quill.import('attributors/style/align'), true);
    this.quill.on('text-change', this.emitQuillText.bind(this));
  }

  setInitialContent() {
    this.quill.root.innerHTML = this.quillContent;
  }


  emitQuillText() {
    this.quillContent = this.quill.root.innerHTML;
    this.ngModelChange.emit(this.quillContent);
  }

  insertVariable(variableText: string) {
    const selection = this.quill.getSelection(true);
    this.quill.insertText(selection.index, ` ${variableText} `);
  }

  // These methods are required for the NgModel binding to work properly
  writeValue() {
  }

  registerOnChange() {
  }

  registerOnTouched() {
  }

}
