import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { TeacherService } from '../../../../services/teacher.service';
import { StudentService } from '../../../../services/student.service';

import { LoaderService } from '../../../../modules/shared/loader'
import { TeacherSubscriberService } from '../../../../services/teacher-subscriber.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-teacher-filter',
  templateUrl: './teacher-filter.component.html',
  styleUrls: ['./teacher-filter.component.css']
})
export class TeacherFilterComponent implements OnInit {

  languages: any = [];

  countryList: any = [];

  language: any = 0;
  countryName: any = 0;
  category: any = [];
  limit: any = 1;
  categoryList: any = [];

  //range for price filter
  someRange = [0,100000];
  setMinValue:number=0;
  setMaxValue:number=100000000;

  minPrice:number=0;
  maxPrice:number=1000000;



  
  // isFromLink: boolean = false;
  constructor(private teacherService: TeacherService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private teacherSubscriberService: TeacherSubscriberService) { }

  ngOnInit() {
    // this.language = this.route.snapshot.paramMap.get("lang") || "0";
    this.route.params.subscribe(val => {
      this.language = val.lang || "0";
      this.getTeacherList(this.countryName, this.language, this.limit, this.category,this.minPrice,this.maxPrice);
    });
    this.getTeacherPriceRange();
    this.getLanguages();
    this.getCountryList();
   
    this.getcategoryAndSubcategories();
  }

  getTeacherPriceRange() {
    this.studentService.getTeacherPriceRange().subscribe((data) => {
      if (data.code == '200') {
        
        this.someRange =[data.Range.min,data.Range.max];
        console.log("min===>  ",data.Range.min, "max==>",data.Range.max )
        this.setMinValue=data.Range.min;
        this.setMaxValue=data.Range.max;

       // this.categoryList = data.dataGrid;
      }
    }, error => {
      console.log(error.code);
    });
  }



  getcategoryAndSubcategories() {
    this.studentService.getStudtGroupCategories().subscribe((data) => {
      if (data.code == '200') {
        
        this.categoryList = data.dataGrid;
      }
    }, error => {
      console.log(error.code);
    });
  }


  getTeacherList(country, language, limit, Specialty, minPrice,maxPrice) {
    
    this.loaderService.display(true);
    //passing 20 as a count of data needed
    this.teacherService.getTeacherList(country, language, limit, Specialty, 20,minPrice,maxPrice).subscribe((data) => {

      if (data.code == '200') {
        var object = {
          teacherListing: true,
          code: data.code,
          data: data.data
         // ,isFromLink: this.isFromLink
        }
        this.teacherSubscriberService.setValue(object);

      } else {
        var noFound = {
          teacherListing: false,
          code: 404,
          data: []
          //isFromLink: false
        }
        this.teacherSubscriberService.setValue(noFound);
      }
    }, error => {
      console.log(error);
      this.loaderService.display(false);
     
    });
  };


  filterTeacher() {
    this.loaderService.display(true);
    this.getTeacherList(this.countryName, this.language, this.limit, this.category,this.minPrice,this.maxPrice);

  }


  getLanguages() {
    this.studentService.getStudentLanguages().subscribe((data) => {
      if (data.code == '200') {
        this.languages = data.data;
      }
    }, error => {
      console.log(error.code);
    });
  }


  getCountryList() {
    this.studentService.getCountriesList().subscribe((data) => {
      if (data.code == '200') {
        this.countryList = data.countries;
      } else {
        // this.router.navigate(['']);
      }
    }, error => {

      this.router.navigate(['']);
      console.log(error.code)
    });

  }


  // this.form1 = this.formBuilder.group({ 'single': [ 10 ] });

  //For availablity filter
  timingControl = new FormControl();

  timingOfDay = [
    {
      name: 'Time of day',
      timing: [
        { value: 'night-0', viewValue: 'Late night' },
        { value: 'morning-1', viewValue: 'Morning' },
        { value: 'evening-2', viewValue: 'Evening' },
        { value: 'afternoon-3', viewValue: 'Afternoon' }
      ]
    },
  ];

  day = [
    {
      name: 'Day',
      days: [
        { value: 'Monday' },
        { value: 'Tuesday' },
        { value: 'Wednesday' },
        { value: 'Thursday' },
        { value: 'Friday' },
        { value: 'Saturday' },
        { value: 'Sunday' }

      ]
    }
  ];
  
  onChange(event) {
   this.minPrice =Math.round(event[0]);
   this.maxPrice= Math.round(event[1]);
   this.filterTeacher();
  }


  showSelectedRange(someRange:any):string{    
    return '$'+ someRange[0] + '- $' + someRange[1];
  }
}
