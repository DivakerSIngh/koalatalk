import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

import { StudentService } from '../../app/services/student.service';

@Injectable()

//to check if user should be in the joined practice room page or not
export class PracticeRoomJoinGuard implements CanActivate {

  constructor(private router: Router,
    private studentService: StudentService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    debugger
    if (this.studentService.isLoggedIn()) {
      return true;
      //getting the loggedIn user id
      // let loggedIndId = localStorage.getItem('student-id');
      // if (loggedIndId) {
      //   //getting the id params
      //   if (next.params.id != undefined) {
      //     this.studentService.joinPracticeRoom(next.params.id, '').subscribe((data) => {
      //       debugger
      //       if (data.code == '200' || data.code == '202') {
      //         return true;
      //       }
      //       else {
      //         this.router.navigate(['../practice-room', data.room_id]);
      //         return false;
      //       }
      //     }, error => {
      //       console.log(error.code);
      //       return false;
      //     });

      //   }
      //   else {
      //     return false;
      //   }
      // }
      // else {
      //   return false;
      // }

    } else {
      if (next.params.id != undefined) {
        this.router.navigate(['../practice-room', next.params.id]);
      }
      else {
        this.router.navigate(['']);
      }
    }
  }
}
