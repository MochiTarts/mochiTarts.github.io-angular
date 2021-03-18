import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactTitle: string = "Contact Me";

  constructor() { }

  ngOnInit(): void {
  }

  sendMail() {
    var name = (<HTMLInputElement>document.getElementById('name')).value
    var message = (<HTMLInputElement>document.getElementById('message')).value
    var email = (<HTMLInputElement>document.getElementById('email')).value
    if (name.length > 0 && name.length > 0 && email.length > 0) {
      document.getElementById('thankyou_alert').style.opacity = '1';
      setTimeout(function() {
        document.getElementById('thankyou_alert').style.opacity = '0';
      }, 5000)
    }
  }

  dismissAlert() {
    document.getElementById('thankyou_alert').style.opacity = '0';
  }

}
