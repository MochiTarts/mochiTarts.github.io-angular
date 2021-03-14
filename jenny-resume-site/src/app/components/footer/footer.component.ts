import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
