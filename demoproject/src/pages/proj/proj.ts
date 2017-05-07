import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { RegisterService } from '../../app/services/register.service';

@Component({
  selector: 'proj',
  templateUrl: 'proj.html'
})
export class ProjPage {
  projects: string[];

  constructor(public navCtrl: NavController,
              private registerService: RegisterService) {

  }

  //
  //Method automatically called upon loading the screen
  //
  ngOnInit(){
    this.projects = this.registerService.getProjList();
  }

  //
  //Method upon pressing New button
  //
  addProj(){
    //transition to Registration Page
    this.navCtrl.push(RegisterPage);
  }

}
