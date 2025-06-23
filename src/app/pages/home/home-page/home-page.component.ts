import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../../../components/nav-bar/nav/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent { }
