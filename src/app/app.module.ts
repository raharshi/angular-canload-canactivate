import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './welcome.component';
import { LogoutComponent }  from './authentication/logout.component';
import { DashboardLayoutComponent }  from './dashboard.layout.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { AppRoutingModule }  from './app-routing.module';
import { AuthModule }  from './authentication/auth.module';
import { CustomPreloadingService } from './custom-preloading.service';

@NgModule({
  imports: [     
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    LogoutComponent,
    DashboardLayoutComponent,
    PageNotFoundComponent
  ],
  providers: [ CustomPreloadingService],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor() {
     console.log('AppModule loaded.');
  }
} 