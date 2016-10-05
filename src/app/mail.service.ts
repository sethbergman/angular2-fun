import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: `The choices for 2016 are a capital douche and a turd sandwich.`},
    {id: 1, text: `The puppeteers are working hard.`},
    {id: 2, text: `Never give up on your dreams.`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    );
  }

  constructor() { }

}
