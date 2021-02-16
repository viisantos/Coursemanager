import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErroComponent } from './erro/erro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ErroComponent, NavBarComponent],
  imports: [
     RouterModule.forRoot([
      {
        path: '**', component: ErroComponent
      }
     ])
  ],
  exports:[
    ErroComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
