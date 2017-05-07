import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjPage } from '../proj/proj';

@Component({
  selector: 'auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

  constructor(public navCtrl: NavController) {

  }

  validateAuth(){
      //validate email and password
      this.navCtrl.push(ProjPage);
  }

}
