import {Injectable} from '@angular/core';


@Injectable()
export class AuthService{
    public MIN_PWD_LENGTH = 4;

    constructor(){

    }

    //
    //Method for required field validation
    //Returns:  true = validation failed (missing input field)
    //          false = validation success
    //
    validateRequired(val: any){

        if(val == ""){
            return true;
        } else {
            return false;
        }
    }

    //
    //Method for email format validation
    //Returns:  true = validation failed (incorrect format)
    //          false = validation success
    //
    validateEmailFormat(val: any){

        let EMAIL_REGEXP =  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        return EMAIL_REGEXP.test(val) ? null : {
            validateEmail: {
            valid: false
            }
        };
    }

    //
    //Method for password length validation
    //Returns:  true = validation failed (insufficient password length)
    //          false = validation success
    //
    validatePwdLen(val: string){
        if (val.length < this.MIN_PWD_LENGTH){
            return true;
        }
        return false;
    }

}