import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lesson-topic',
  templateUrl: './add-lesson-topic.component.html',
  styleUrls: ['./add-lesson-topic.component.css']
})
export class AddLessonTopicComponent implements OnInit {


  //this page is not developed yet
  language:any;
  topicSubCategory:any;
  topicSubcategoryList:any;
  languageList:any;
  constructor() { }

  ngOnInit() {
  }

  findTopic(){

  }
}
