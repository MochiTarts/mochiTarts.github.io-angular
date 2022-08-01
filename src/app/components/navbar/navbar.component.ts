import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private active: ActivatedRoute) { }

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
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  gotoTop() {
    if (this.router.url == '/') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoAbout() {
    if (this.router.url == '/') {
      let el = document.getElementById("about");
      el.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate(['/']).then(() => {
        let el = document.getElementById("about");
        el.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }

  gotoSkills() {
    if (this.router.url == '/skills') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/skills']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoProjects() {
    if (this.router.url == '/projects') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/projects']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoExperiences() {
    if (this.router.url == '/experience') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/experience']).then(() => {
        window.location.reload();
      });
    }
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
    if (this.router.url == '/') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoAboutMobile() {
    document.getElementById("myNav").style.width = "0%";
    if (this.router.url == '/') {
      let el = document.getElementById("about");
      el.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      this.router.navigate(['/']).then(() => {
        let el = document.getElementById("about");
        el.scrollIntoView({
          behavior: 'smooth'
        });
      })
    }
  }

  gotoSkillsMobile() {
    document.getElementById("myNav").style.width = "0%";
    if (this.router.url == '/skills') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/skills']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoProjectsMobile(){
    document.getElementById("myNav").style.width = "0%";
    if (this.router.url == '/projects') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/projects']).then(() => {
        window.location.reload();
      });
    }
  }

  gotoExperiencesMobile() {
    document.getElementById("myNav").style.width = "0%";
    if (this.router.url == '/experience') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      this.router.navigate(['/experience']).then(() => {
        window.location.reload();
      });
    }
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
