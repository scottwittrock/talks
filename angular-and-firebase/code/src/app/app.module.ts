import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EventcardComponent } from './eventcard/eventcard.component';

const appRoutes: Routes = [
  { path: 'list', component: EventlistComponent },
  { path: 'add', component: AddeventComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: EventlistComponent },
];

export const firebaseConfig = {
    apiKey: "<API-Key>",
    authDomain: "<domain>.firebaseapp.com",
    databaseURL: "https://<domain>.firebaseio.com",
    storageBucket: "<domain>.appspot.com",
    messagingSenderId: "<app-key>"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EventlistComponent,
    AddeventComponent,
    EventcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
