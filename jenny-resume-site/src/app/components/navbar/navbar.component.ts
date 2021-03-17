import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    smoothscroll.polyfill();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      var nav = <HTMLInputElement>document.querySelector('.nav');
      nav.style.opacity = '1';
    }, 1500)
  }

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
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoSkills() {
    let el = document.getElementById("skills");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoProjects() {
    let el = document.getElementById("projects");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoExperiences() {
    let el = document.getElementById("experiences");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoContact() {
    let el = document.getElementById("contact");
    el.scrollIntoView({
      behavior: 'smooth'
    });
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
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoSkillsMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("skills");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoProjectsMobile(){
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("projects");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoExperiencesMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("experiences");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  gotoContactMobile() {
    document.getElementById("myNav").style.width = "0%";
    let el = document.getElementById("contact");
    el.scrollIntoView({
      behavior: 'smooth'
    });
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
