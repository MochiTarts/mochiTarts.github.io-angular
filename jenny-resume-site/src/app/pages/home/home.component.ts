import { animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  greeting: string = "Hello, I'm Jenny Yu";
  slogan: string = "A self-driving computer science student at the University of Toronto";
  about: string = "About";

  constructor() { }

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
