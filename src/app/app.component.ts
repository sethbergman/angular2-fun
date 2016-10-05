import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <ul>
    <li *ngFor="let message of mail.messages">
      {{message}}
    </li>
  </ul>
  </div>`
})

export class AppComponent {

  constructor(
    @Inject('mail') private mail
  ){}
}
