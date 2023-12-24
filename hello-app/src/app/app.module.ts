import { NgModule } from '@angular/core';

// Importing Modules
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import  { ProductModule } from './module/product/product.module';

// Importing components
import { TestComponent } from './component/test.component';
import { HomeComponent } from './component/home.component';
import { AboutUsComponent } from './component/about-us.component';
import { ContactUsComponent } from './component/contact-us.component';
import { PageNotFoundComponent } from './component/page-not-found.component';


const rootRoutes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path:'AboutUs', component:AboutUsComponent},
  {path:'ContactUs', component:ContactUsComponent},
  {path: 'TestPage', component:TestComponent},
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
  ];
  


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(rootRoutes),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
