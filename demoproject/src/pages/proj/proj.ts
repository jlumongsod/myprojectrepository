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
  showDelete: boolean;

  constructor(public navCtrl: NavController,
              private registerService: RegisterService) {

      //DEBUGGING: default(false), set true to show delete buttons
      this.showDelete = true;
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

  //
  //Method upon pressing Delete button
  //
  deleteProj(i){
    this.projects.splice(i, 1);
    this.registerService.setProjList(this.projects);

    //DEBUGGING: Monitor after deleting project
    //console.log("In deleteProj " + this.registerService.showProjList());
  }

}
