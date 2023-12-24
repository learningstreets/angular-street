import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// below component will be shared component hence importing
import { ProductRatingComponent } from "./product-rating.component";


/**
 * THough it is a shared module hence this will have a 
 * declarations,
 * import
 * and exports
 * 
 * will mention those things here which will shared across application
 */

@NgModule({

declarations:[ProductRatingComponent],

imports:[CommonModule],

exports:[ProductRatingComponent]

})

export class SharedModule{}