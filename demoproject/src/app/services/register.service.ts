import {Injectable} from '@angular/core';


@Injectable()
export class RegisterService{
    private projListStr: string;
    private emptyArr: string[];
    private NO_DUPLICATE = -1;
    private NO_CONTENT = '';
    
    constructor(){
        this.projListStr = this.NO_CONTENT;
        this.emptyArr = [];
    }

    //
    //Method to check if project list is empty
    //
    isEmptyList(){
        if (this.projListStr == this.NO_CONTENT){
            return true;
        }
        return false;
    }

    //
    //Method setter for project list
    //
    setProjList(projArr: string[]){
        this.projListStr = JSON.stringify(projArr);
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
            return JSON.parse(this.projListStr);
        }
    }

    //
    //Method to check duplicate of Project Name 
    //Return:   true = duplicate exists
    //          false = no duplicate
    checkDuplicate(val: any){
        if (this.projListStr.indexOf(val) == this.NO_DUPLICATE){
            return false;
        }
        return true;
    }

    //
    //Method to display project list in console log
    //
    showProjList(){
        console.log("Array value: " + this.projListStr);
    }

}