import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{

    handleError(error){

        console.log("unexpected error occured ");
        console.log(error);


    }
}