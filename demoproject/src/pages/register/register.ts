import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjPage } from '../proj/proj';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }

  registerProj(){
    //check for uniqueness of project name
    //if unique, store in localStorage
    this.navCtrl.push(ProjPage);
  }
}
