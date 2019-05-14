import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { TeacherService } from '../../../services/teacher.service';
import { LoaderService } from '../../../modules/shared/loader';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  //#region "Local variable"
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  ifSuccess:boolean=false;
  ifInvalidPassword:boolean=false;
  //#endregion

  @Input() origin: number = 0; //1 from student and 2 from teacher
  constructor(private studentService: StudentService,
    private loaderService: LoaderService, private teacherService:TeacherService) { }

  ngOnInit() {

  }

  changePassword() {
    debugger
    if (this.newPassword == this.confirmPassword) {

      var sendRequest = {
        oldPassword: this.currentPassword,
        newPassword: this.newPassword
      }
      this.loaderService.display(true);
      if(this.origin==1){
      this.studentService.changePassword(sendRequest).subscribe((data) => {

        if (data.code == '200') {
          this.ifSuccess=true;
          setTimeout(() => {
            this.ifSuccess=false;
          }, 5000);
        }
        else if(data.code =='510') {
          this.ifInvalidPassword=true;
          setTimeout(() => {
            this.ifInvalidPassword=false;
          }, 5000);
        }
        this.loaderService.display(false);
      }, error => {
        this.loaderService.display(false);
        console.log(error);
      });
    }else{
      this.teacherService.changePassword(sendRequest).subscribe((data) => {
        
                if (data.code == '200') {
                  this.ifSuccess=true;
                  setTimeout(() => {
                    this.ifSuccess=false;
                  }, 5000);
                }
                else if(data.code =='510') {
                  this.ifInvalidPassword=true;
                  setTimeout(() => {
                    this.ifInvalidPassword=false;
                  }, 5000);
                }
                this.loaderService.display(false);
              }, error => {
                this.loaderService.display(false);
                console.log(error);
              });
    }
    }
  }

}
