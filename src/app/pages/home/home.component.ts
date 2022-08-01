import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as anime from 'animejs';
import smoothscroll from 'smoothscroll-polyfill';
declare var anime: any;

import about from '../home/content/about.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  greeting: string = "Hello, I'm Jenny Yu";
  slogan: string = "A self-driving computer science student at the University of Toronto";

  aboutTitle: string = "About";
  about: Array<any>;

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {
    this.about = about;
    Chart.defaults.global.defaultColor = '#fff';

    this.spinner.show();
  }

  ngOnInit(): void {
    smoothscroll.polyfill();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.spinner.hide();

      var greeting = <HTMLElement>document.querySelector('.ml1');
      greeting.style.opacity = '1';
      var slogan = <HTMLInputElement>document.querySelector('.ml2');
      slogan.style.opacity = '1';
      //Greeting Text
      var textWrapper = document.querySelector('.ml1');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: false})
      .add({
        targets: '.ml1 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 70*i,
        complete: this.deleteSpanml1
      })

      //Slogan Text
      var textWrapper = document.querySelector('.ml2 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
      .add({
        targets: '.ml2 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i,
        complete: this.deleteSpanml2
      })

      AOS.init({
        delay: 100,
        duration: 1500,
        once: true,
        anchorPlacement: 'top-bottom',
      });
    }, 1500)
  }

  deleteSpanml1() {
    var textWrapper = document.querySelector('.ml1');
    textWrapper.innerHTML = textWrapper.textContent.replace("<span class='letter'>", "").replace("</span>", "");
  }

  deleteSpanml2() {
    var textWrapper = document.querySelector('.ml2 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace("<span class='letter'>", "").replace("</span>", "");
  }

  gotoAbout() {
    let el = document.getElementById("about");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

}