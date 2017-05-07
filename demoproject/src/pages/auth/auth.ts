import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjPage } from '../proj/proj';
import { AlertController } from 'ionic-angular';

import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: 'auth.html'
})
export class AuthPage {
  loginOK: boolean;
  errorMsg: string;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              private authService: AuthService) {

  }

  //
  //Method for overall validation using authService APIs
  //Composes appropriate dialog message content
  //
  validateAuth(){
      //initialize status
      this.loginOK = true;
      this.errorMsg = "";
      
      //validate missing email
      if( this.authService.validateRequired(document.forms["loginForm"]["femail"].value)){
        this.errorMsg = this.errorMsg + "<br>Input missing: Email";
        this.loginOK = false;
      } 
      //validate email format
      else if( this.authService.validateEmailFormat(document.forms["loginForm"]["femail"].value)){
        this.errorMsg = this.errorMsg + "<br>Incorrect Email format";
        this.loginOK = false;
      }

      //validate missing password
      if( this.authService.validateRequired(document.forms["loginForm"]["fpassword"].value)){
        this.errorMsg = this.errorMsg + "<br>Input missing: Password";
        this.loginOK = false;
      }
      //validate password length
      else if( this.authService.validatePwdLen(document.forms["loginForm"]["fpassword"].value)){
        this.errorMsg = this.errorMsg + "<br>Password must have at least " + this.authService.MIN_PWD_LENGTH + " characters";
        this.loginOK = false;        
      }
  
      //DEBUGGING: Disable authentication/validation. Restore before Code Release
      //if( !this.loginOK ){
      
      //check status to proceed
      if( this.loginOK ){
          this.navCtrl.push(ProjPage);
      } else {
        this.showAlert(this.errorMsg);
      }

  }

  //
  //Method to display dialog message
  //
  showAlert(msg: any) {
    let alert = this.alertCtrl.create({
      title: 'Authentication Failed',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
