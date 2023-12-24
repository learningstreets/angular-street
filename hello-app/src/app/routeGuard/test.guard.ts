import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// here we are using CanActivate interface
export class TestGuard implements CanActivate {

  constructor(private _router:Router) {}
  canActivate(
    // to provide current route info
    route: ActivatedRouteSnapshot, 
    // to provide the state of current state value
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    // so here we do check if product id is valid or not if yes then will proceed further otherwise will 
    // go back to product list page 

    const id = Number(route.paramMap.get('id'));

    // if below satisfies then return false else will return true and do the process
    // which is already handled in product-detail page
    if(isNaN(id) || id < 1){
      alert('Invalid product Id');
      this._router.navigate(['/Products']); // returning back to Products page
      return false;
    }

    return true;
  }
  
}


// all done let's add this routeGuard to the route file for the product-detail component 
