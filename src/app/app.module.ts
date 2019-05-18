import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { LivestreamModule } from './shell/livestream/livestream.module';
import { LoginModule } from './login/login.module';
import { MapModule } from './shell/map/map.module';
import { NotFoundModule } from './not-found/not-found.module';
import { RegisterModule } from './register/register.module';
import { SubmissionsModule } from './shell/submissions/submissions.module';
import { ShellComponent } from './shell/shell/shell.component';
import { ShellModule } from './shell/shell.module';
import { AuthGuard } from './services/auth.guard';
import { MapComponent } from './shell/map/map/map.component';
import { LivestreamComponent } from './shell/livestream/livestream/livestream.component';
import { AdminGuard } from './services/admin.guard';
import { SubmissionsComponent } from './shell/submissions/submissions/submissions.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShellModule,
    LoginModule,
    NotFoundModule,
    RegisterModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'Bearer ',
        whitelistedDomains: ['192.168.6.100:8080']
      }
    }),
    RouterModule.forRoot([
      {
        path: '', component: ShellComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'map'
          },
          {
            path: 'map',
            component: MapComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'livestream',
            component: LivestreamComponent,
            canActivate: [AdminGuard]
          },
          {
            path: 'submissions',
            component: SubmissionsComponent,
            canActivate: [AdminGuard]
          }
        ]
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
