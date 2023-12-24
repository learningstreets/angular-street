import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "src/app/model/userModel";


@Injectable({

    providedIn: 'root'
})

// Resolver will first resolve the data means it will get all the records first then it will load the route
export class ProductResolver implements Resolve<IUser>{

    resolve(route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<IUser> {
            return IUser;
        }
}