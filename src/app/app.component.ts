import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quill-text-editor';

  textContent = 'ARYA FOR PRESIDENT';

  consoleText(text) {
    console.log(text);
  }
}
