import {Component, OnDestroy, OnInit} from '@angular/core';

import { TestService } from '../service/test.service';
import { IUser } from '../model/userModel';
import { Subscription } from 'rxjs';

@Component({

    selector:'app-test',
    templateUrl:'./test.component.html'
})

export class TestComponent implements OnInit, OnDestroy {

    users:IUser[] = [];
    constructor(private _testService:TestService){}
    sub!:Subscription ; // creating a variable which will help us to unsubscribe the observable
    // we have added ! mark and it will tell to the compiler that we will handle it later so ignore please

    ngOnInit(){
        // calling the service method here such that we can get the data on page load

        // 1. Syntax : Below is the normal type of syntax we can add further code such that it will be good coding
       this._testService.getUserData().subscribe(
            data=>{
                this.users =  data;
            }
        )


        // 2. 
        this.sub = this._testService.getUserData().subscribe({
            // next is a function which gets called when a next elements arrives
            next: data=>{
                this.users =  data;
            },
            // error function gets called when an error comes
            // logging the error if we get while subscribe
            error: err => console.log(err)
            // ,
            // complete: {console.log("This process has been completed")}
           
        });
            

}

ngOnDestroy(){
 this.sub.unsubscribe(); // it will unsubscribe all the observables
}


}