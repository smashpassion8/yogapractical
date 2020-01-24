import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { PrimarySeriesComponent } from './primaryseries';
import { AsanaDetailComponent } from './asana-detail';
import { UpanishadComponent } from './upanishad';
import { PranayamComponent } from './pranayam';
import { GravityposeComponent } from './gravitypose';
import { GravityposePComponent } from './gravitypose-p';
import { PranayamPComponent } from './pranayam-p';
import { PrimaryseriesPComponent } from './primaryseries-p';
import { MudraComponent } from './mudra';
import { TotalityPComponent } from './totality-p';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { Article } from './_models/article';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'primaryseries', component: PrimarySeriesComponent, canActivate: [AuthGuard]},
  { path: 'asanaDetail/:id', component: AsanaDetailComponent },
  { path: 'upanishad', component: UpanishadComponent},
  { path: 'pranayam', component: PranayamComponent},
  { path: 'gravity', component: GravityposeComponent},
  { path: 'gravity_p', component: GravityposePComponent},
  { path: 'pranayam_p', component: PranayamPComponent},
  { path: 'primaryseries_p', component: PrimaryseriesPComponent},
  { path: 'mudra', component: MudraComponent},
  { path: 'totality-p', component: TotalityPComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'fullcalendar', component: FullCalendarComponent},
  { path: 'article', component: ArticleComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }