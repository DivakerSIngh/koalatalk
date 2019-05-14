import { Component, ElementRef, ViewChild, Input, OnInit, Inject, Injectable } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service'

import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material'
import { fadeInContent } from '@angular/material/typings/select/select-animations';
import { element } from 'protractor';
@Component({
  selector: 'app-addaddsurvey',
  templateUrl: './addaddsurvey.component.html',
  styleUrls: ['./addaddsurvey.component.css']
})
@Injectable()
export class AddaddsurveyComponent implements OnInit {
  user: any;
  surveyName: string;
  surveyType: string;
  surveyGame: string;
  surveyStatus: string;
  surveyQuestion: string;
  surveyQuestionType: string;
  surveyAnswer: string;
  id: string = '';
  isTriggeredVal: boolean = false;
  isTriggred: boolean = false;
  ifgames: boolean = true;
  isTriggredOrNot: boolean = false;
  istriggerStatus: string = '';
  parentSurvey: any[] = [];
  parentTypeSurvey: any;
  isOptionBasedOrNot: boolean = false;
  isOptionBased: boolean = false;
  isOptionBasedStatus: string = '';

  optionBasedDataOptions: any[] = [];
  optionBasedData:string;

  questionoptions: any[] = [];
  constructor( @Inject(DOCUMENT) private document: any,
    private elementRef: ElementRef, private route: ActivatedRoute, public dialog: MdDialog, private http: Http, private backendService: BackendService, public snackBar: MdSnackBar, public router: Router) {
    this.surveyQuestionType = 'text';
  }


  // ngAfterViewInit() {
  //   var dy = this.document.createElement("script");
  //   dy.type = "text/javascript";
  //   dy.src = "assets/js/select2.min.js";
  //   this.elementRef.nativeElement.appendChild(dy);
  //   var s = this.document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "assets/js/custom.select2me.js";
  //   this.elementRef.nativeElement.appendChild(s);
  // }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("params is:", this.id);
    this.fetchSurveyDetails(this.id);

  }

  addQustionLoop() {
    var newOption = {
      values: ''
    }
    this.questionoptions.push(newOption);
  }


  deleteQuestion(index) {
    this.questionoptions.splice(index, 1);
  }
  changeQuestionType(value) {
    if (value != 'text') {
      var newOption = {
        values: ''
      }
      this.questionoptions.push(newOption);

    }
    else {
      this.questionoptions = [];
    }
  }

  isTriggeredfunc() {
    this.isTriggeredVal = !this.isTriggred;
  }

  ChangesurveryGame() {
    this.isTriggredOrNot = false;
    this.isTriggred = false;
    this.istriggerStatus = '';
  }

  changeSurveyType() {
    if (this.surveyType == 'Games') {
      this.ifgames = true;
      this.isTriggredOrNot = false;
      this.isTriggred = false;
      this.istriggerStatus = '';
    }
    else {
      this.ifgames = false;
      this.isTriggredOrNot = false;
      this.isTriggred = false;
      this.istriggerStatus = '';
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1000
    });
  }

  saveSurvey(saveObject) {
    if (this.id != null) {
      saveObject.survey_id = this.id;
    }
    var sendoptions = [];
    for (let i = 0; i < this.questionoptions.length; i++) {
      sendoptions.push(this.questionoptions[i].values)
    }
    if (this.surveyType != 'Games') {
      this.surveyGame = '';
    }

    if (this.parentTypeSurvey != undefined) {
      var parentTypeSurveyValue = this.parentSurvey.filter(x => x._id == this.parentTypeSurvey);

    }
    if (parentTypeSurveyValue != null) {
      if (parentTypeSurveyValue[0]._id != undefined) {
        var parentTypeSurveyId = parentTypeSurveyValue[0]._id;
      }
    }

    var sendobject:any =
      {
        surveyName: saveObject.surveyName,
        surveyType: saveObject.surveyType,
        surveyStatus: saveObject.surveyStatus,
        surveyQuestion: saveObject.surveyQuestion,
        surveyQuestionType: saveObject.surveyQuestionType,
        isTriggered: this.isTriggredOrNot,
        parentType: parentTypeSurveyId,
        surveyGame: saveObject.surveyGame,
        surveyoption: sendoptions,
        isOptionBased:this.isOptionBasedOrNot,
        isoptionBasedOption:this.optionBasedData
      }
      if (this.id != null) {
        sendobject.survey_id = this.id;
      }
    //this.resetForm();
    console.log("saveObject=========>>", sendobject)
    this.backendService.addsurvey(sendobject).subscribe((data) => {
      console.log("Notifications" + data.message)
      if (!data.error && data.statusCode == 200) {
        this.openSnackBar(data.message)
      } else {
        this.openSnackBar(data.message)
      }
    }, err => {
      // Log errors if any
      console.log("eeeeee", err);
      if (err.error && err.statusCode == 401) {
        //this.openSnackBar("error: server error please try again after sometime")
        this.router.navigate(['/login'])
      } else {
        this.openSnackBar("error: Survey Already exists")
      }
    })
  }


  resetForm() {
    this.surveyName = "";
    this.surveyType = "";
    this.surveyGame = "";
    this.surveyStatus = "";
    this.surveyQuestion = "";
    this.surveyQuestionType = "";
    this.surveyAnswer = '';

    this.isTriggredOrNot = false;
    this.isTriggred = false;
    this.istriggerStatus = '';

  }

  isTriggerEvent() {
    if (this.isTriggred) {
      if (this.surveyType != undefined && this.surveyType != '') {
        if (this.surveyType == 'Games') {
          if (this.surveyGame != undefined && this.surveyGame != '') {
            this.isTriggredOrNot = !this.isTriggredOrNot;
            var result = {
              surveyType: this.surveyType,
              surveyGame: this.surveyGame
            }
            this.fetchParentSurvey(result);
          }
          else {
            this.istriggerStatus = 'Please select survey game first';
          }
        }
        else {
          this.isTriggredOrNot = !this.isTriggredOrNot;
          var obj = {
            surveyType: this.surveyType
          }
          this.fetchParentSurvey(obj);
        }

      }
      else {
        this.istriggerStatus = 'Please select survey type first';
      }
    } else {
      this.istriggerStatus = '';
      this.isTriggredOrNot = false;
      this.isTriggred = false;
      this.isOptionBased=false;
      this.isOptionBasedOrNot=false;
    }
  }


  fetchParentSurvey(obj) {
    if (this.id != null) {
      obj.survey_id = this.id;
    }
    console.log("id=====================>>", JSON.stringify(obj));
    this.backendService.fetchSurveylistByType(obj).subscribe((data) => {
      console.log('user Profile info is:', data.statusCode);
      if (!data.error && data.statusCode == 200) {
        if (data.result.user.length > 0) {
          this.parentSurvey = data.result.user;
        }
        else {
          this.parentSurvey = [];
          this.openSnackBar("No Record Found for this survey type")
          this.istriggerStatus = '';
          this.isTriggredOrNot = false;
          this.isTriggred = false;
        }
      } else {


      }
    }, err => {
      // Log errors if any
      console.log("eeeeee", err);
      if (err.error && err.statusCode == 401) {
        //this.openSnackBar("error: unauthorised bad request")
        this.router.navigate(['/login'])
      } else {
        //this.openSnackBar("error: server error please try again after sometime")
        this.router.navigate(['../dashboard/users'])
      }
    })
  }


  fetchSurveyDetails(obj) {
    console.log("id=====================>>", JSON.stringify(obj));
    this.backendService.fetchSurveyDetail({ "survey_id": obj }).subscribe((data) => {
      console.log('user Profile info is:', data.statusCode);

      if (!data.error && data.statusCode == 200) {
        if (data.result.user.length > 0) {

          this.user = data.result.user[0];
          this.surveyName = this.user.surveyName;
          this.surveyType = this.user.surveyType;
          this.surveyGame = this.user.surveyGame;
          this.surveyStatus = this.user.surveyStatus;
          this.surveyQuestion = this.user.surveyQuestion;
          this.surveyQuestionType = this.user.surveyQuestionType;
          if (this.surveyQuestionType != 'text') {
            for (let i = 0; i < this.user.surveyoption.length; i++) {
              var newOption = {
                values: this.user.surveyoption[i]
              }
              this.questionoptions.push(newOption);
            }
          }
          this.surveyAnswer = '';
        }
        else {
          this.openSnackBar("No record found");
        }
      } else {
        //alert("Data not Found")
      }
    }, err => {
      // Log errors if any
      console.log("eeeeee", err);
      if (err.error && err.statusCode == 401) {
        //this.openSnackBar("error: unauthorised bad request")
        this.router.navigate(['/login'])
      } else {
        //this.openSnackBar("error: server error please try again after sometime")
        this.router.navigate(['../dashboard/verification'])
      }
    })
  }

  ChangeParentTypeSurvey() {
    this.isOptionBased=false;
    this.isOptionBasedStatus='';
    this.isOptionBasedOrNot=false;
    this.optionBasedDataOptions=[];
    debugger
    //this.parentTypeSurvey
    //this.isOptionBased
    if (this.parentTypeSurvey != undefined) {
      var parentTypeSurveyValue = this.parentSurvey.filter(x => x._id == this.parentTypeSurvey);
     if(parentTypeSurveyValue.length>0){
       if(parentTypeSurveyValue[0].surveyQuestionType !='text'){
       for(let i=0; i< parentTypeSurveyValue[0].surveyoption.length; i++){
         var options={
           value:parentTypeSurveyValue[0].surveyoption[i]
         }
          this.optionBasedDataOptions.push(options);
       }
       }
     }
      //this.optionBasedDataOptions
    }
  }

  isOptionBasedMethod() {

    if (this.isOptionBased) {
      if (this.parentTypeSurvey != undefined && this.parentTypeSurvey != '') {
        this.isOptionBasedOrNot = !this.isOptionBasedOrNot;
      }
      else {
        this.isOptionBasedStatus = 'Please select Perent Type Survey first';
      }
    } else {
      this.isOptionBasedStatus = '';
      this.isOptionBasedOrNot=false;
    }
  }

}