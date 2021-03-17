import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart, { ChartOptions, ChartType, ChartColor } from 'chart.js';
import * as pluginLabels from 'chartjs-plugin-labels';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as anime from 'animejs';
import smoothscroll from 'smoothscroll-polyfill';
declare var anime: any;

import about from '../home/content/about.json';
import skills from '../home/content/skills.json';
import projects from '../home/content/projects.json';
import experiences from '../home/content/experiences.json';

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

  skillsTitle: string = "Skills";
  skillsCategory: string = "Languages";
  skillsData: Array<any>;
  pluginLabels: Array<any> = [pluginLabels]
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColours: ChartColor = [
    "#fff"
  ]
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      labels: [
        {
          render: 'percentage',
          precision: 2,
          fontColor: '#fff'
        }
      ],
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#fff',
        fontSize: 15
      }
    }
  };
  resumeTitle: string = "Resume";

  experiencesTitle: string = "Experience";
  experiencesInfo: Array<any>;
  jobTitle: string;
  jobDate: string;
  jobCompany: string;
  jobPoints: Array<any>;

  projectsTitle: string = "Projects";
  closeResult = '';
  projectsInfo: Array<any>;
  images: Array<any> = [];
  projectLongDesc: string;
  projectLink: string;
  projectWebsite: string;
  projectTitle: string;
  projectTags: Array<any>;

  contactTitle: string = "Contact Me";

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {
    this.about = about;

    this.skillsData = skills;
    Chart.plugins.register;
    Chart.defaults.global.defaultColor = '#fff';

    this.projectsInfo = projects;

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

  gotoAbout() {
    let el = document.getElementById("about");
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  doughnutChartData(data: Array<any>) {
    var levels = []
    data.forEach(element => {
      levels.push(element['grade'])
    });
    return [levels]
  }

  doughnutChartLabels(data: Array<any>) {
    var labels = []
    data.forEach(element => {
      labels.push(element['name'])
    })
    return labels
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

  gotoProjectLink(link: string) {
    window.open(link, "_blank");
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
