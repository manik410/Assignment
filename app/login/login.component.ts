import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  checkData(form)
  {
    var regex = "^[A-Za-z]\\w{4,30}$"
    if(form.value.username.match(regex))
    {
      if(this.validatePassword(form.value.pass))
      {
        localStorage.setItem("username",JSON.stringify(form.value.username));
        this.router.navigate(["/dashboard"]);
      }

    }
    else
    {
      alert("Please enter valid username");
    }
  }
    validatePassword(fld) {

    var error = "";
    var illegalChars = /[\W_]/;

    if (fld == "") {
        alert("You didn't enter a password.");
        return false;
    } else if ((fld.length < 7) || (fld.length > 15)) {
        error = "The password too short. \n";
        alert(error);
        return false;

    } else if (!illegalChars.test(fld)) {
        error = "The password must contains special characters.\n";
        alert(error);
        return false;

    } else if ( (fld.search(/[a-zA-Z]+/)==-1) || (fld.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        alert(error);
        return false;

    } else {
    }
   return true;
}

}
