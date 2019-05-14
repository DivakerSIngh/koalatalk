import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { TeacherService } from '../../../../services/teacher.service';
import { StudentService } from '../../../../services/student.service';

import { LoaderService } from '../../../../modules/shared/loader';
import { TeacherSubscriberService } from '../../../../services/teacher-subscriber.service';



@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  country: any = 0;
  language: any = 0;
  limit: any = 0;
  teacherList: any = [];
  noTeacherFound: boolean = false;
  showVideo: boolean = false;
 // isFromLink: boolean = false;
  constructor(private teacherService: TeacherService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private teacherSubscriberService: TeacherSubscriberService) { }


  ngOnInit() {

    // //Here checking the list of teacher
    this.teacherSubscriberService.bs.subscribe((val: any) => {

      if (val.teacherListing != undefined) {
        debugger
        if (val.code == '200') {
          this.teacherList = val.data;
          this.noTeacherFound = false;
          this.loaderService.display(false);
         // this.isFromLink = val.isFromLink;

          if (this.teacherList.length > 0) {
            this.currentTeacherId = this.teacherList[0]._id;
            this.showVideo = true;
            var obj = {
              availableTime: this.teacherList[0].availableTime,
              video: this.teacherList[0].videoUrlLink
            }
            this.teacherSubscriberService.setValue(obj);
          }
          this.loaderService.display(false);
        }
        else {

          this.showVideo = false;
          this.teacherList = [];
          this.noTeacherFound = true;
          this.teacherSubscriberService.setValue({});
          this.loaderService.display(false);
        }
      }
      // else {
      //   this.teacherList = [];
      //   this.noTeacherFound = true;
      //   this.loaderService.display(false);

      // }
    });
   
  }

  // @HostListener('mouseover') onMouseHover() {
  //   // 
  // }


  

  currentTeacherId: any = 0;
  getDetailsofTeacher(event, teacher) {
    if (this.currentTeacherId != teacher._id) {
      this.currentTeacherId = teacher._id;
      this.showVideo = true;
      var obj = {
        availableTime: teacher.availableTime,
        video: teacher.videoUrlLink
      }
      this.teacherSubscriberService.setValue(obj);
    }

  }

  goToTeacherDetails(teacherId: string): void {
    
      this.router.navigate(['../teacher/details',teacherId]);
    
  }

}
