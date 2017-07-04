import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core/core-module';
import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {ContactService} from './aplication/contact/services/contact.service';
import {PortfolioService} from "./aplication/portfolio/services/portfolio.service";
import {PortfolioResolver} from "./aplication/portfolio/services/portfolio.resolver";
import {HomePageResolver} from "./core/home-page/services/home-page.resolver";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        CoreModule,
        BrowserAnimationsModule,
    ],
    providers: [
        PortfolioService,
        HomePageResolver,
        ContactResolver,
        ContactService,
        PortfolioResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
