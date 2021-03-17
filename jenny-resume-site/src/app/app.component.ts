import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'jenny-resume-site';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      var displayContent = <HTMLInputElement>document.querySelector('.displayContent');
      displayContent.style.display = 'block';
    }, 1400)
  }
}
