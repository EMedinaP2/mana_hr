import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Rutas
import { APP_ROUTES } from './app.routes';

//Servicio


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPositionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
