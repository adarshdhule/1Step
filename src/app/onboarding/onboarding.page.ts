import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  goToHome(){
    console.log("Skip button, go to home");
    this.router.navigate(['tabs/dashboard']);
  }

  moveToNext(slides){
    console.log("Next button, go to next slide");
    slides.slideNext();
  }
}
