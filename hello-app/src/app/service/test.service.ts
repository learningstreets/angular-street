import { Injectable } from '@angular/core';

// importing Observable to get use of it
import { Observable, range, throwError } from 'rxjs';

import  {map, filter, tap, catchError} from 'rxjs/operators'; // tap and catchError used for error handling

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IUser } from '../model/userModel';

@Injectable({

providedIn:'root'
})


export class TestService {

    private data="Data from service";
    
    private userDataUrl = 'assets/data/userData.json'; // will read the data from json file

    constructor(private _http: HttpClient){}

    /**
     * Observable: Observables are collection of items comes over time. 
     * Observables are thing until we subscribe it
     * 
     * 
     * next: Next item is emitted
     * error : if any error occurred
     * complete: once process is done
     */
    
// http calls are asynchronous calls
    // http return observables only
    getUserData() { // here return type would be Observable<IUser[]>
        // call http
        // here get method will convert the response into   IUser[] array
        return  this._http.get<IUser[]>(this.userDataUrl).pipe(
            // tap is used for accessing the data without modifying it
            tap(data => console.log('All :', JSON.stringify(data))),
            catchError(this.handleError)
        ); 
        //
    }


    // in below method we can log the error into database
    private handleError(err: HttpErrorResponse)
    {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent){
            errorMessage = "An error occurred: ${err.error.message}";
        }
        else
        {
            errorMessage = "Server returned code: ${err.status}, error message is: ${err.message}";
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }

 
}