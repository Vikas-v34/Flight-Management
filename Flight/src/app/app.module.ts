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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';

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
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    FlightListComponent,
    FlightDetailsComponent,
    CreateFlightComponent,
    CreateBookingComponent,
    CreateAirportComponent,
    BookingListComponent,
    BookingConfirmedComponent,
    AirportListComponent,
    AirportDetailsComponent,
    AddScheduledFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
