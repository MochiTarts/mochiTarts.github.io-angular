import { AfterViewInit, Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as anime from 'animejs';
import smoothscroll from 'smoothscroll-polyfill';
declare var anime: any;

import projects from './content/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projectsHeader: string = "My Projects";
  projectsSlogan: string = "A list of significant projects I've worked on in the past"
  projectsTitle: string = "Projects";
  closeResult = '';
  projectsInfo: Array<any>;
  images: Array<any> = [];
  projectLongDesc: string;
  projectLink: string;
  projectWebsite: string;
  projectTitle: string;
  projectTags: Array<any>;

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {
    this.projectsInfo = projects;
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

  gotoProjectLink(link: string) {
    window.open(link, "_blank");
  }

  open(projectContent, project) {
    this.images = project.images;
    this.projectLongDesc = project.long_desc;
    this.projectLink = project.link;
    this.projectWebsite = project.website;
    this.projectTitle = project.title;
    this.projectTags = project.tags;
    this.modalService.open(projectContent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
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
