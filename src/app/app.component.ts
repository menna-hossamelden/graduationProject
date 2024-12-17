import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { provideRouter } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
// import { NavbarComponent_1 as NavbarComponent } from "./components/navbar/navbar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'styleShare';
}
