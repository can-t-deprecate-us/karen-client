import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { EventComponent } from './event/event.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { SubmissionsModule } from '../submissions/submissions.module';

@NgModule({
  declarations: [MapComponent, EventComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSyOq4Rl-qKeVfW4bKfSrA1-U04mHbGGo'
    }),
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialFileInputModule,
    SubmissionsModule
  ]
})
export class MapModule { }
