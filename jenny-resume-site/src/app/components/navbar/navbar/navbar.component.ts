import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  gotoAbout() {
    let el = document.getElementById("about");
    el.scrollIntoView();
  }

  gotoSkills() {
    let el = document.getElementById("skills");
    el.scrollIntoView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav-inverse');
    } else {
      element.classList.remove('nav-inverse');
    }
  }

}
