import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../model/userModel';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html' 
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router:Router) { }

  user:IUser | undefined; // we have to define to avoid the strict typecast 
  // but in template we have to handle this undefined variable otherwise we will encounter with and error
  // we can use *ngIf

  ngOnInit(): void {

    // when the user clicks on product name then we are passing the product id 
    // will use this to get the dat against that
    // to read the parameter value we have to use ActivatedRoute directive


    // we are passing a parameter name which is 'id'
    // as the results will be string hence need to do type cast into number
    const id = Number(this._route.snapshot.paramMap.get('id'));

    let userTemp:IUser = {
      userID : 1,
      userName: "Jon",
      userLocation: "Home"
    }
    this.user= userTemp;

  }


  // this method will send the page to back
onBack():void{
  this._router.navigate(['/Products']);
}

  


}
