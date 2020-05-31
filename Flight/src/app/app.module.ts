import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddflightComponent } from './addflight/addflight.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateflightsComponent } from './updateflights/updateflights.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component';
import { ShowScheduledFlightsComponent } from './show-scheduled-flights/show-scheduled-flights.component';
import { ServicesComponent } from './services/services.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { ModifyScheduledFlightComponent } from './modify-scheduled-flight/modify-scheduled-flight.component';
import { ModelComponent } from './model/model.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    LoginComponent,
    AddUserComponent,
    FlightsComponent,
    HomeComponent,
    LogoutComponent,
    SignupComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UpdateflightsComponent,
    FlightdetailsComponent,
    WelcomeAdminComponent,
    UpdateBookingComponent,
    UpdateAirportComponent,
    ShowScheduledFlightsComponent,
    ServicesComponent,
    SearchScheduledFlightComponent,
    ModifyScheduledFlightComponent,
    ModelComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
