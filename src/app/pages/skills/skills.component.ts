import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import Chart, { ChartOptions, ChartType, ChartColor } from 'chart.js';
import * as pluginLabels from 'chartjs-plugin-labels';
import { NgxSpinnerService } from "ngx-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as anime from 'animejs';
import smoothscroll from 'smoothscroll-polyfill';
declare var anime: any;

import skills from './content/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillsHeader: string = "My Skills"
  skillsSlogan: string = "A summary of what I can do and how adept I am at each"
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
    animation: {
      duration: 0
    },
    plugins: {
      labels: [
        {
          render: 'percentage',
          precision: 2,
        }
      ],
    },
    legend: {
      display: true,
      labels: {
        fontSize: this.getLabelSize()
      }
    }
  };
  resumeTitle: string = "Resume";

  @HostListener('window:resize', ['$event'])
  getLabelSize():number {
    var width = window.innerWidth;
    return Math.min(width/26, 15);
  }

  constructor(private spinner: NgxSpinnerService) {
    this.skillsData = skills;
    Chart.plugins.register;
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

  gotoSkills() {
    let el = document.getElementById("skills");
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

}
