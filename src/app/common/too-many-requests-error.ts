import { AppError } from './app-error';
export class TooManyReqestsError extends AppError {

    constructor(error :any){
        super(error);
    }
}