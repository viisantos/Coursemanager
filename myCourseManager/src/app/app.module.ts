import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CModule } from './courses/c.module';
import { CoreModule } from './core/core.module';
import { AppPipeModule } from './pipe/app-pipe.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CModule,
    CoreModule,
    AppPipeModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '', pathMatch: 'full'
      }
    ]),
    //CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
