import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart, { ChartOptions, ChartType } from 'chart.js';
import * as pluginLabels from 'chartjs-plugin-labels';
import AOS from 'aos';
import 'aos/dist/aos.css';

import about from '../home/content/about.json';
import skills from '../home/content/skills.json';

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
  //doughnutChartLabels: Label[] = [];
  pluginLabels: Array<any> = [pluginLabels]
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      labels: [
        {
          render: 'percentage',
          precision: 2
        }
      ],
    }
  };

  constructor() {
    this.about = about
    this.skillsData = skills
    Chart.plugins.register
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

  ngOnInit(): void {
    AOS.init({
      delay: 300,
      duration: 1500,
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }

  ngAfterViewInit(): void {
  }

}
