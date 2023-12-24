import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // this will bring all default directives

// import { ProductRoutingModule } from './product-routing.module';

// need to import form module or other modules if we are using so

// Importing all product related components  
import { ProductDetailComponent } from './component/product-detail.component';
import { ProductListComponent } from './component/product-list.component';

// Importing Route Guards
import { ProductDetailGuard } from './routeGuard/product-detail.guard';


// importing shared module
import { SharedModule } from 'src/app/shared/shared.module';


const productRoutes: Routes = [
    {path:'Products', component:ProductListComponent},
    {path:'Products/:id',
    canActivate:[ProductDetailGuard],
    component:ProductDetailComponent}
    
    // path:'products/:id/edit'
    // optional parameters
    // routerLink = "['/products', {name: 'name', age: 'age'}]"
    // read it via activated route

    // QUery parameters
    // [routerLink]= ...........
    // [queryParams] = "{id:1, name:'name'}"
    // by defaults browser reset the query parameters
    // we have to specify one directive such that we can preserve it
    // place it in back button
    // queryParamsHandling="preserve"
    ];

@NgModule({


    declarations:[
        // mention all components
        ProductListComponent, ProductDetailComponent
    ],
    imports:[
        // other modules
        RouterModule.forChild(productRoutes),
        CommonModule,
        HttpClientModule,
        SharedModule
    ]


})

export class ProductModule {}