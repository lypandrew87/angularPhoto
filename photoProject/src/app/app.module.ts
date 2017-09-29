import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpModule} from '@angular/http';

import {ContactService} from './services/contact-service.service'; 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'api',
        component: UserComponent
      },
      {
        path: '',
        component: UserComponent
      }
    ]
  )
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
