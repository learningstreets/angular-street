# AngularStreet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Creating a component command

ng g c <folderName>/<componentName>

## Creating a component command

ng g c <folderName>/<componentName> --flat
--flat will not add folder for component

## ROuting Guards

CanActive, CanDeactive, Resolve, CanLoad

We will set route guard for product-detail page such that user can access via product list page only
for this we have to create another class which will be a service that will hold logic for passed parameter
see routerGuard folder

you can use via cli
ng g g product-detail --flat

## Angular Module

It's better to have multiple modules rather than having one large one

Let's create a feature module
we can create with angular cli
ng g m products/product --flat

we have separate module called products

## Shared module

we can create a shared module
ng g m shared/shared --flat


## Route Resolver
this concept helps to render the page when we do have data ready.
these are service

