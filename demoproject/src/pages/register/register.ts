import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjPage } from '../proj/proj';
import { AlertController } from 'ionic-angular';

import { RegisterService } from '../../app/services/register.service';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  projects: string[];
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private registerService: RegisterService) {

  }

  //
  //Method upon pressing Register button
  //
  registerProj(project){
    this.projects = this.registerService.getProjList();
    
    //check if duplicate project name
    if (this.registerService.checkDuplicate(project)){     
      this.showAlert("Project Name already exists! Please try again.");
    } else {  
      //store to project list
      this.projects.push(project);
      this.registerService.setProjList(this.projects);

      //go to Project Page
      this.navCtrl.push(ProjPage);
    }
    
    //DEBUGGING: Monitor inputted project name and project list
    //console.log("@register.ts - input value: " + project);
    //console.log("@register.ts - registerProj(): " + this.registerService.showProjList());
  }

  //
  //Method upon pressing Cancel button
  //
  cancel(){
    //go back to Previous Page
    this.navCtrl.pop();
  }

  //
  //Method to display dialog message
  //
  showAlert(msg: any) {
      let alert = this.alertCtrl.create({
      title: 'Registration Failed',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
    
}
