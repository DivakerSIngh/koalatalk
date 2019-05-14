import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { LoaderService } from '../../../../shared/loader';
import { StudentService } from '../../../../../services/student.service';
import { LoginPopupService } from '../../../../../services/login-popup.service';



import { ActivatedRoute, Router } from '@angular/router';



// import  'assets/js/WebRTC/adapter.js';
// import  'assets/js/WebRTC/meeting.js';
// import  'assets/js/WebRTC/room.js';


declare var closeCamClass: any;


@Component({
  selector: 'app-join-practice-room',
  templateUrl: './join-practice-room.component.html',
  styleUrls: ['./join-practice-room.component.css']
})
export class JoinPracticeRoomComponent implements OnInit {

  obj: any;
  redirectToOtherPage:boolean=true;

  userId:any;
  userFullName:any;
  userImage:any;
  userEmail:any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private studentService: StudentService,
    private router: Router,
    private loginPopupService: LoginPopupService
  ) {


    var practiceRoomId = this.route.snapshot.paramMap.get("id");
    //var practiceFullDetails = this.allPracticeRooms.filter(x => x._id == practiceId)[0];
    //if user is already login
    if (this.studentService.isLoggedIn()) {
      this.userId=localStorage.getItem('student-id');

      //getting the full name of student
      var studentDetails = localStorage.getItem('student-details') || null;
      
      if (studentDetails != null) {
        var fullDetails =JSON.parse(studentDetails);
         this.userFullName=  fullDetails.firstName + " " + fullDetails.lastName;
         this.userEmail=  fullDetails.email;
         this.userImage = fullDetails.profilePic;
      }
      this.redirectToOtherPage=false;
      //this.loaderService.display(true);
      // var practiceType = practiceFullDetails.type;

      // //if room is not full

      // if (practiceFullDetails.members.length != practiceFullDetails.maxParticipation) {

      //   // Practice type "0 for public" & "1 for private", "2 for Associated Group"

      //   if (practiceType === 0) {
      //     //if room is public
      //     this.router.navigate(['../join-practice-room/', practiceId]);

      //   }
      //   else if (practiceType === 1) {
      //     this.isRoomFull = false;
      //     this.isGroupMember = true;
      //     this.isPasswordRequired = true;
      //     $('#JoinGroupPopUp').modal('show');

      //   }
      //   else if (practiceType === 2) {
      //     //if room is associated from Group
      //     if (practiceFullDetails.associatedSdyGrpId != undefined) {
      //       var allMemberOfGroup = practiceFullDetails.associatedSdyGrpId.members || null;
      //       if (allMemberOfGroup != null) {
      //         let loggedIndId = localStorage.getItem('student-id');

      //         var isGroupMember = allMemberOfGroup.filter(x => x.userId == loggedIndId && x.memberStatus == 1);
      //         if (isGroupMember.length > 0) {
      //           //redirect user here
      //           this.router.navigate(['../join-practice-room/', practiceId]);
      //         }
      //         else {
      //           //user is not a member of group
      //           //message -:Sorry, this room is associated with study group.
      //           this.isRoomFull = false;
      //           this.isGroupMember = false;
      //           this.isPasswordRequired = false;
      //           $('#JoinGroupPopUp').modal('show');
      //         }
      //       }

      //     }
      //   }
      // }
      // else {
      //   this.isRoomFull = true;
      //   this.isGroupMember = true;
      //   this.isPasswordRequired = false;
      //   $('#JoinGroupPopUp').modal('show');
      // }
    }
    else {
      this.redirectToOtherPage=true;
     // alert('not login');
      //open the login popup
    //  this.router.navigate(['../practice-room/' + practiceRoomId]);
       //open the login popup      
       var obj = {
        redirectToPracticeRoom: true,
        url:'../practice-room/'+practiceRoomId
      }
      this.loginPopupService.setValueForLoginPopUp(obj);
    }

   }

  sendMessage(msg: string) {
    //this.socket.emit("message", msg);
  }

  ngOnInit() { 


    var obj = {
      isVideoConfrenssing: true
    }
    this.loginPopupService.setValueForLoginPopUp(obj);

    // setTimeout(() => {
      var meeting = this.document.createElement("script");
      meeting.type = "text/javascript";
      meeting.src = "assets/js/WebRTC/meeting.js";
      this.elementRef.nativeElement.appendChild(meeting);
    // }, 100);
    
  }

  
  
  ngAfterViewInit() {



      // var socket = this.document.createElement("script");
      // socket.type = "text/javascript";
      // socket.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"; 
      // this.elementRef.nativeElement.appendChild(socket); 


      // var adapter = this.document.createElement("script");
      // adapter.type = "text/javascript";
      // adapter.src = "assets/js/WebRTC/adapter.js";
      // this.elementRef.nativeElement.appendChild(adapter);

     
      setTimeout(() => {
        var room = this.document.createElement("script");
        room.type = "text/javascript";
        room.src = "assets/js/WebRTC/room.js";
        this.elementRef.nativeElement.appendChild(room);
      }, 600);
    }
  
  ngOnDestroy() {
    
    // if(!this.redirectToOtherPage){
    this.obj = new closeCamClass();
    this.obj.closeCam();
   // }
  }

}


