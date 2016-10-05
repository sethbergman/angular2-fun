import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `The choices for 2016 are a capital douche and a turd sandwich.`,
    `The puppeteers are working hard.`,
    `Never give up on your dreams.`
  ];


  constructor() { }

}
