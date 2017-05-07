import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'proj',
  templateUrl: 'proj.html'
})
export class ProjPage {

  constructor(public navCtrl: NavController) {

  }

  addProj(){
    this.navCtrl.push(RegisterPage);
  }

}
