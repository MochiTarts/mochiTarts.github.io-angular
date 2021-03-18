import { AfterViewInit, Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as anime from 'animejs';
import smoothscroll from 'smoothscroll-polyfill';
declare var anime: any;

import experiences from './content/experiences.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  experiencesHeader: string = "My Work Experience";
  experiencesSlogan: string = "A detailing of the past positions I've held and what I've gained from them"
  experiencesTitle: string = "Experience";
  experiencesInfo: Array<any>;
  jobTitle: string;
  jobDate: string;
  jobCompany: string;
  jobPoints: Array<any>;
  closeResult = '';

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {
    this.experiencesInfo = experiences;
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
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
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

  openJob(experienceContent, job) {
    this.jobTitle = job.job_title;
    this.jobDate = job.date;
    this.jobCompany = job.company;
    this.jobPoints = job.points;
    this.modalService.open(experienceContent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      document.getElementById("modal-project-paragraph").innerHTML.replace(/\n/g, "<br />");
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
