import { Component, OnInit } from '@angular/core';


import { LoaderService } from '../../../../../../modules/shared/loader'
import { TeacherService } from '../../../../../../services/teacher.service'
import { CalenderService } from '../../../../../../services/calender.service'

import { HeaderService } from '../../../../../../header.service';



import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css'],
  providers: [CalenderService]
})
export class AvailabilityComponent implements OnInit {

  prepareCalendar: any = [];
  timeZone: string;
  isShowMessage:boolean=false;
  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
    private calenderService: CalenderService,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.getCalendarForm();
    // this.getTeacherInformation()
    var teacherDetails = localStorage.getItem('teacher-full-details') || null;
debugger
    if (teacherDetails != null) {
      var availability = JSON.parse(teacherDetails);
      this.getTeacherAvailablity(availability);
    }

  }

  getCalendarForm() {
    this.prepareCalendar = this.calenderService.getCalendarForm();
  }


  getTeacherAvailablity(teacherInfo) {
    debugger
      if (teacherInfo.timeZone != undefined) {
        this.timeZone = teacherInfo.timeZone;
      }
      if (teacherInfo.availableTime != undefined && teacherInfo.availableTime.length > 0) {
        this.prepareCalendar = [];
        this.prepareCalendar = teacherInfo.availableTime;
      }
   
  }

    //fetching teacher information method
    // getTeacherInformation() {
    //   this.loaderService.display(true);
    //   this.teacherService.getTeacherInfoAfterLogin().subscribe((data) => {

    //     if (data.code == '200') {

    //       if (data.tutorsInfo.length > 0) {

    //         if (data.tutorsInfo[0].timeZone != undefined) {
    //           this.timeZone = data.tutorsInfo[0].timeZone;
    //         }
    //         if (data.tutorsInfo[0].availableTime != undefined && data.tutorsInfo[0].availableTime.length > 0) {
    //           this.prepareCalendar = [];
    //           this.prepareCalendar = data.tutorsInfo[0].availableTime;
    //         }
    //       }
    //       this.loaderService.display(false);
    //     } else {
    //       this.loaderService.display(false);
    //       this.router.navigate(['']);
    //     }
    //   }, error => {

    //     //this.router.navigate(['']);
    //   });
    // };


    changeValue(index, value) {
      this.prepareCalendar[index].availability[value] = !this.prepareCalendar[index].availability[value];
    }

    isCheckedOrNot(index, value) {
      return this.prepareCalendar[index].availability[value];
    }


    updateTeacherAvailableTime() {
      debugger
      this.loaderService.display(true);
      this.teacherService.updateTeacherAvailableTime(this.prepareCalendar).subscribe((data) => {
        debugger
        if (data.code == '200') {
          this.loaderService.display(false);
          localStorage.removeItem('teacher-full-details');
          localStorage.setItem('teacher-full-details', JSON.stringify(data.tutorsInfo));  
          this.isShowMessage=true;       
          setTimeout(() => {
            this.isShowMessage=false; 
          }, 5000);
        }
        else {
  
          //this.router.navigate(['']);
        }
  
  
      }, error => {
        debugger
        //this.router.navigate(['']);
      });
  
    }


  }



