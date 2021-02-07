import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  schools={};
  school_data_object=[]
  deleted_arr=[]
  size=0;
  constructor() {
    this.schools=JSON.parse(localStorage.getItem("school_data"));
    if(this.schools)
    {
      this.school_data_object.push(this.schools);
    }
  }
  ngOnInit(){}
  addData()
  {
    this.size=this.size+1;
    var school_data={'id':this.size,'schoolname':"abc",'board':"def","medium":'english',"class":'9th'}
    if(this.school_data_object)
    {
      this.school_data_object.push(school_data);
      localStorage.removeItem("school_data");
      localStorage.setItem("school_data",JSON.stringify(this.school_data_object))
      this.schools=JSON.parse(localStorage.getItem("school_data"));
    }
    else
    {
      localStorage.setItem("school_data",JSON.stringify(this.school_data_object))
    this.schools=JSON.parse(localStorage.getItem("school_data"));
    }
  }
  checkCheckBoxvalue(data)
  {
    if(this.deleted_arr.includes(data))
    {
      var index =this.deleted_arr.indexOf(data);
      if (index !== -1) {
        this.deleted_arr.splice(index, 1);
      }
    }
    else
    {
      this.deleted_arr.push(data);
    }
    console.log(this.deleted_arr);
  }
  deleteData()
  {

      for(var i=0;i<this.deleted_arr.length;i++)
      {
        var index =this.deleted_arr.indexOf(this.deleted_arr[i]);
        this.school_data_object.splice(index,1);
      }
      localStorage.removeItem("school_data");
      localStorage.setItem("school_data",JSON.stringify(this.school_data_object))
      this.schools=JSON.parse(localStorage.getItem("school_data"));
  }
}
