import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PrimarySeriesComponent } from './primaryseries';
import { AsanaDetailComponent } from './asana-detail';
import { UpanishadComponent } from './upanishad';
import { PranayamComponent } from './pranayam';
import { GravityposePComponent } from './gravitypose-p';
import { PrimaryseriesPComponent } from './primaryseries-p';
import { PranayamPComponent } from './pranayam-p';
import { MudraComponent } from './mudra';
import { GravityposeComponent } from './gravitypose';
import { TotalityPComponent } from './totality-p';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ArticleComponent } from './article/article.component';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './_services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PrimarySeriesComponent,
    AsanaDetailComponent,
    UpanishadComponent,
    PranayamComponent,
    GravityposePComponent,
    GravityposeComponent,
    PrimaryseriesPComponent,
    PranayamPComponent,
    MudraComponent,
    TotalityPComponent,
    CalendarComponent,
    FullCalendarComponent,
    ArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { }