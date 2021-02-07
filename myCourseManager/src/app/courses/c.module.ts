import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CListComponent } from './c-list.component';
import { CInfoComponent } from './c-info.component';
import { RouterModule } from '@angular/router';
//import { AppPipeModule } from '../shared/pipe/app-pipe.module';


@NgModule({
  declarations: [
    CListComponent,
    CInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'courses', component:CListComponent
      },
      {
        path: 'courses/info/:id', component:CInfoComponent
      }
    ])
  ]
})
export class CModule { }
