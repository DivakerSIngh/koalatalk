import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { HeaderService } from '../../../../../../Koalatalk/src/app/header.service';

import { ActivatedRoute, Router } from '@angular/router';
import { LoginPopupService } from '../../../services/login-popup.service';
import { LoaderService } from '../../../modules/shared/loader';
import { TeacherService } from '../../../services/teacher.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ],

})
export class LandingPageComponent implements OnInit {

  visibilityChanged: String = "hidden";
  tutorList:any=[];
  constructor(private headerService: HeaderService, private route: ActivatedRoute,
    private loginPopupService: LoginPopupService,
    private loaderService:LoaderService,
    private teacherService:TeacherService
  ) { }

  ngOnInit() {
    this.headerService.setHeaderValue(false);
    var resetPasswordDetails = this.route.snapshot.paramMap.get("auth-token");

    if (resetPasswordDetails != null) {
      var obj = {
        resetPassword: resetPasswordDetails
      }
      this.loginPopupService.setValueForLoginPopUp(obj);
    }
    else {
      this.loginPopupService.setValueForLoginPopUp({});
    }

    setTimeout(() => {
      this.visibilityChanged = "shown";
    }, 100);
    this.getTeacherList();
  }

  onClickedOutside(Event) {
    console.log('Clicked outside');
  }

  clickout() {

  }

  getTeacherList() {
    this.loaderService.display(true);
    let minPrice=0;
    let maxPrice=100000000;
     this.teacherService.getTeacherList(0,0,1,[],15,minPrice,maxPrice).subscribe((data) => {
    
      if (data.code == '200') {
        this.tutorList=data.data;
        debugger         
       }else{
         
       }
      this.loaderService.display(false);
        
     }, error => {
       console.log(error);
       this.loaderService.display(false);
       //this.router.navigate(['']);
     });
   };
 


}
