import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  openNav() {
    document.getElementById("myNav").style.width = "50%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

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

  gotoProjects() {
    let el = document.getElementById("projects");
    el.scrollIntoView();
  }

  gotoExperiences() {
    let el = document.getElementById("experiences");
    el.scrollIntoView();
  }

  gotoContact() {
    let el = document.getElementById("contact");
    el.scrollIntoView();
  }

  //Mobile versions of go to section functions
  gotoTopMobile() {
    document.getElementById("myNav").style.width = "0%";
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  gotoAboutMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("about");
    el.scrollIntoView();
  }

  gotoSkillsMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("skills");
    el.scrollIntoView();
  }

  gotoProjectsMobile(){
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("projects");
    el.scrollIntoView();
  }

  gotoExperiencesMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("experiences");
    el.scrollIntoView();
  }

  gotoContactMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("contact");
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
