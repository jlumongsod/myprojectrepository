import {Injectable} from '@angular/core';


@Injectable()
export class RegisterService{
    private emptyArr: string[]; //Note: List of projects is in local storage "allProjects"
    private NO_DUPLICATE = -1;
    
    constructor(){
        this.emptyArr = [];
    }

    //
    //Method to check if project list is empty
    //
    isEmptyList(){
        if (localStorage.getItem("allProjects") == null){
            return true;
        }
        return false;
    }

    //
    //Method setter for project list
    //
    setProjList(projArr: string[]){
        localStorage.setItem("allProjects", JSON.stringify(projArr));
    }

    //
    //Method getter for project list
    //Return:   a)empty array if list is empty
    //          b)array after json.parse
    //Note: Return empty array instead, since json.parse will return undefined  
    getProjList(){
        if (this.isEmptyList()){
            return this.emptyArr;
        } else {
            return JSON.parse(localStorage.getItem("allProjects"));
        }
    }

    //
    //Method to check duplicate of Project Name 
    //Return:   true = duplicate exists
    //          false = no duplicate
    checkDuplicate(val: any){
        if (this.isEmptyList()){
            return false;
        } else {
            if (localStorage.getItem("allProjects").indexOf(val) == this.NO_DUPLICATE){
                return false;
            } else {
                return true;
            }
        }

    }

    //
    //Method to display project list in console log
    //
    showProjList(){
        //console.log("Array value: " + this.projListStr);
        console.log("Array value: " + localStorage.getItem("allProjects"));       
    }

}