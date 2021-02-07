import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {FileSelectDirective,FileDropDirective,FileUploadModule,FileUploader} from 'ng2-file-upload';
import * as $ from 'jquery';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
url='';
name=''
  constructor() {
    this.name=JSON.parse(localStorage.getItem("username"));
    if(localStorage.hasOwnProperty("img_url"))
    {
      this.url =JSON.parse(localStorage.getItem("img_url"));
    }
    else
    {
      this.url="../../assets/img/user.png";
    }
  }
  ngOnInit() {
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (imgsrc:any) => {
        localStorage.setItem("img_url",JSON.stringify(imgsrc.target.result));
        if(localStorage.hasOwnProperty("img_url"))
        {
          this.url =JSON.parse(localStorage.getItem("img_url"));
        }
        else
        {
          this.url="../../assets/img/user.png";
        }
      }
    }
  }
}
