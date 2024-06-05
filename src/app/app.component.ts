import {Component} from '@angular/core';
import {ShareButtonDirective} from "ngx-sharebuttons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShareButtonDirective],
  template: `
    <button shareButton="facebook">
      Share on facebook
    </button>`,
})
export class AppComponent {
  title = 'angular-18';
}
