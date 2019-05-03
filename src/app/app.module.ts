import { SafehtmlPipe } from './pipes/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    QuillEditorComponent,
    SafehtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
