import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav-bar/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent {
  title = 'pets_project';
}
