import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { EmployecomponentComponent } from './src/app/employecomponent/employecomponent.component';
import { EmploydetailsComponent } from './employdetails/employdetails.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent, EmployecomponentComponent, EmploydetailsComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
