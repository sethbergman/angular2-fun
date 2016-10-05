import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <ul>
    <app-simple-form *ngFor="let message of mail.messages">
      
    </app-simple-form>
  </ul>
  </div>`
})

export class AppComponent {

  constructor(
    @Inject('mail') private mail
  ){}
}
