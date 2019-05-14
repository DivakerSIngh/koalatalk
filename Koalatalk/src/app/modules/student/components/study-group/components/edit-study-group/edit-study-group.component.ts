import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../../shared/loader';
import { StudentService } from '../../../../../../services/student.service';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-study-group',
  templateUrl: './edit-study-group.component.html',
  styleUrls: ['./edit-study-group.component.css']
})
export class EditStudyGroupComponent implements OnInit {


  formData: any;
  viewImage: any = "./assets/images/avtar.png";
  timeZoneList: any = [];
  languages: any = [];
  categoryList: any = [];
  category: any;
  subcategoryList: any = [];
  subcategory: any;
  timeZone: any;
  groupName: string = '';
  subject: string = ''
  language: any;
  invalidImage: boolean = false;
  imageValidationMessage: string = "";
  remainingChar: number = 250;
  Description: string = '';
  participants: string = '';
  friendList: any = [];
  addedParticipants: any = [];
  createGroupStatus:string='';
  groupDetails:any=[];
  groupId:string='';
  constructor( private route: ActivatedRoute,
     private loaderService: LoaderService,
     private studentService: StudentService,
     private _location:Location
     ,private router:Router) { 

     }

  ngOnInit() {
    this.loaderService.display(true);
    this.groupId = this.route.snapshot.paramMap.get("id");
   

    this.timeZone = '0';
    this.language = '0';
    this.participants = '0';
    this.formData = new FormData();
    this.getTimeZone();
    this.getLanguages();
    this.getcategoryAndSubcategories();
    this.getParticipantList();
    this.getGroupDetails(this.groupId);
    //this.loaderService.display(false);
    window.scrollTo(0, 0);
    
  }

  getTextAreacount() {
    this.remainingChar = 250 - this.Description.length;
  }

 // resetForm()

  //form valid or not
  isValid(): boolean {
    if (this.category != 0 && this.subcategory != 0  &&
      this.timeZone != 0 && this.groupName.trim() != '' && this.subject.trim() != '' && this.language != 0 && this.Description.trim() != '') {
      return false;
    }
    return true;
  }
  getcategoryAndSubcategories() {
    this.studentService.getStudtGroupCategories().subscribe((data) => {
      
      if (data.code == '200') {
        this.categoryList = data.dataGrid;
        this.category = 0;
        this.subcategory = 0;
        // var innerData=this.categoryList.filter(x=>x._id==this.category);
        // this.subcategoryList=this.categoryList.filter(x=>x._id==this.category)[0].innerData;
      }
    }, error => {
      
      // this.isImage = true;
      // this.requiredStatus = error.message;
      console.log(error.code);
      //this.router.navigate(['']);
    });
  }

  changeCatgegory() {
    
    this.subcategory = 0;
    var innerData = this.categoryList.filter(x => x.name === this.category);
    this.subcategoryList = this.categoryList.filter(x => x.name == this.category)[0].innerData;
  }
  getTimeZone() {
    this.studentService.getCountriesAndTimeZone().subscribe((data) => {
      if (data.code == '200') {
        this.timeZoneList = data.data;
      }
    }, error => {
      // this.isImage = true;
      // this.requiredStatus = error.message;
      console.log(error.code);
      //this.router.navigate(['']);
    });
  }

  getLanguages() {
    this.studentService.getStudentLanguages().subscribe((data) => {

      if (data.code == '200') {
        this.languages = data.data;
      }
    }, error => {
      // this.isImage = true;
      // this.requiredStatus = error.message;
      console.log(error.code);
      //this.router.navigate(['']);
    });
  }

  //checking the valid image
  isValidImage(ext: string): boolean {
    
    if (ext != "jpeg" && ext != "jpg" && ext != "png" && ext != "bmp" && ext != "gif") {
      return false;
    }
    return true;
  }

  //choose image 
  onFileChange(fileInput) {
    this.loaderService.display(true);
    let fileList: FileList = fileInput.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(fileList, file);
      let fileSize: number = fileList[0].size;
      let fileExtenstion = fileList[0].name.split('.').pop();
      if (this.isValidImage(fileExtenstion.toLowerCase())) {
        //500 KB
        if (fileSize <= 512000) {
          // this.formData.set('userImage', file);
          this.formData.append('userImage', file);
          this.studentService.uploadstudentFiles(this.formData).subscribe((data) => {
            if (data.code == '200') {
              this.viewImage = data.imageURL;
              this.imageValidationMessage = '';
              this.invalidImage = false;
              this.loaderService.display(false);
            }
            else {
              this.loaderService.display(false);
              this.invalidImage = true;
              this.imageValidationMessage = 'There is some internal error.';
            var error=  setTimeout(() => {
                this.invalidImage = false;
            
              }, 5000);
            }
          }, error => {
            this.loaderService.display(false);
            this.invalidImage = true;
            this.imageValidationMessage = 'There is some internal error.';
           var internalError= setTimeout(() => {
              this.invalidImage = false;
            
            }, 5000);
          });
        }
        else {
          this.loaderService.display(false);
          this.invalidImage = true;
          this.imageValidationMessage = 'File size can not be more than 500 kb.';
         var moreSize= setTimeout(() => {
            this.invalidImage = false;
  
          }, 5000);
        }
      }
      else {
        this.imageValidationMessage = 'Please upload a valid image.';
        this.loaderService.display(false);
        this.invalidImage = true;
        var invalidImage= setTimeout(() => {
          this.invalidImage = false;

        }, 5000);
      }
    }

  }

  editGroup(event) {
    
    this.loaderService.display(true);
    var timezone = this.timeZoneList.filter(x => x.name == this.timeZone);

    // var studentId = [];
    // for (var i = 0; i < this.addedParticipants.length; i++) {
    //   studentId.push(this.addedParticipants[i]._id);
    // }
    var obj = {
      name: this.groupName.trim(),
      image: this.viewImage,
      categoryId: this.category,
      country: this.timeZone,
      timeZone: timezone[0].offsetStr,
      subject: this.subject.trim(),
      language: this.language,
      description: this.Description.trim(),
      subCategory: this.subcategory,
      studyGroupId:this.groupId
    }

    
    console.log(JSON.stringify(obj));
    this.studentService.editStudyGroup(obj).subscribe((data) => {
      
      if (data.code == '200') {
      this.createGroupStatus='Study Group created Successfully.';
      this.loaderService.display(false);
        // var removeMessag= setTimeout(() => {
        //     this.createGroupStatus='';
    
        // }, 4000);
        this.router.navigate(['../student/student-profile/friends-group/group-details/'+data.studyGroupId]);
      }
      else {
        
        this.loaderService.display(false);
        this.router.navigate(['']);
        this.invalidImage = true;
        this.createGroupStatus = 'There is some internal error.';
        
      }
    }, error => {
      
      this.loaderService.display(false);
      this.router.navigate(['']);
    });

  }

  redirectTest(){
    //student/student-profile/friends-group/group-details/ghkfj
  }
  backToGroupDetails() {
    this.router.navigate(['../student/student-profile/friends-group/group-details/'+this.groupId]);
    
    
  }
  getParticipantList() {
    // if(this.participants.length>3){
    this.studentService.searchStudentFriends('testing').subscribe((data) => {
      
      if (data.code == '200') {
        this.friendList = [];
        this.friendList = data.data;
      }
    }, error => {
      // this.isImage = true;
      // this.requiredStatus = error.message;
      console.log(error.code);
      //this.router.navigate(['']);
    });
    // }
  }

  addParticipantList() {
    var friend = this.friendList.filter(x => x._id == this.participants);
    var ifExist = this.addedParticipants.filter(x => x._id == this.participants);
    if (ifExist.length == 0) {
      this.addedParticipants.push(friend[0]);
      this.participants = '0';
    }
    //this.friendList=[];
    //this.participants='';
  }
  removeFromList(index) {
    this.addedParticipants.splice(index, 1);
    this.participants = '0';
  }


  getGroupDetails(groupId) {
    this.studentService.getGroupDetails(groupId).subscribe((data) => {
      
      if (data.code == '200') {
        this.groupDetails = data.groupData;


    this.groupName=this.groupDetails.name.trim();
    this.viewImage=  this.groupDetails.image || "./assets/images/avtar.png";
    this.category=this.groupDetails.category;
    this.timeZone=this.groupDetails.country,
    this.subject=this.groupDetails.subject.trim();
    this.language=this.groupDetails.language;
    this.Description=this.groupDetails.description.trim();
 
    // this.addedParticipants=[];


      this.remainingChar=250- this.Description.length;
      var onlySubCategory=this.categoryList.filter(x=> x.name ==this.category);
      if(onlySubCategory[0].innerData!=undefined){ 
      this.subcategoryList=onlySubCategory[0].innerData;
      }
       this.subcategory=this.groupDetails.subCategory;
      // var innerData=this.categoryList.filter(x=>x._id==this.category);
      // this.subcategoryList=this.categoryList.filter(x=>x._id==this.category)[0].innerData;





     //student/student-profile/friends-group/group-details/ghkfj

        // this.isMember = this.isMemberOrNot();
        // this.createrName = data.groupData.userId.firstName + ' ' + data.groupData.userId.lastName;
        // this.totalHits = data.groupData.view;
        // this.outerComment = data.groupData.comment;

        //check here wether exists or not

        var loggedInUser = localStorage.getItem('student-id') || null;
        this.loaderService.display(false);

      } else {
        this.router.navigate(['']);
        this.loaderService.display(false);
      }
    }, error => {
      this.loaderService.display(false);
      this.router.navigate(['']);
    });
  };


}
