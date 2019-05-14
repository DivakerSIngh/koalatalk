import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentService } from '../../../../../services/student.service'
import { LoaderService } from '../../../../../modules/shared/loader'
// import{LoginHeaderService} from '../../../../../services/login-header.service';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.css']
})
export class MyClassesComponent implements OnInit {

  constructor(private studentService: StudentService,
    private loaderService: LoaderService) { }


  classPreferences: any = 1; //0 for audio, 1 for video and 2 for both
  allInterests: any = [];
  alreadySelected: any = [];
  ifUpdateSuccessfully: boolean = false;

  ngOnInit() {
    this.loaderService.display(true);
    this.getStudnetIntrest();
  }


  // //get student intrest
  getStudnetIntrest() {
    this.studentService.getClassPreferences().subscribe((data) => {
      if (data.code == '200') {
        debugger

        if (data.data[0].classPreference != undefined) {
          this.classPreferences = data.data[0].classPreference;
        }

        if (data.data[0].interests.length > 0) {

          //getting the selected interests
          this.alreadySelected = data.data[0].interests;

        }
        if (data.dataGrid.length > 0) {
          this.allInterests = data.dataGrid;
        }
        this.loaderService.display(false);
      }
    }
      , error => {
        debugger
        //   if (error.code == 501) {
        console.log(error)
        this.loaderService.display(false);

        // }
      });
  };

  boxCheckedOrNot(interestId): boolean {
    var count = this.alreadySelected.filter(id => id == interestId);
    if (count > 0) {
      return true;
    }
    return false;
  }

  //changing the  Class Preferences if exists then remove and vice versa
  changePreferences(interestId: string) {
    debugger
    var existsPreferences = this.alreadySelected;
    var index = this.alreadySelected.indexOf(interestId.toString())
    if (index > -1) {
      this.alreadySelected.splice(index, 1);
    }
    else {
      this.alreadySelected.push(interestId.toString());
    }

  }

  updatePreferences() {

    var parantInterest = [];

    //getting the parent id from child ids;
    //we have child ids but not parent id.
    for (var j = 0; j < this.allInterests.length; j++) {
      for (var i = 0; i < this.alreadySelected.length; i++) {
        var selected = this.allInterests[0].innerData.filter(innerData => innerData._id == this.alreadySelected[i]);
        if (selected.length > 0) {
          parantInterest.push(this.allInterests[j]._id.toString())
          break;
        }
      }
    }


    var obj = {
      classPreference: this.classPreferences,
      parantInterest: parantInterest,
      intrest: this.alreadySelected
    }

    this.studentService.updateClassPreferences(obj).subscribe((data) => {
      debugger
      if (data.code == '200') {
        this.ifUpdateSuccessfully = true;
        this.loaderService.display(false);
      }
    }
      , error => {
        debugger
        //   if (error.code == 501) {
        console.log(error)
        this.loaderService.display(false);

        // }
      });
  }
}
