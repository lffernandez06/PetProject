import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarComponent } from "../../../components/search-bar/search-bar/search-bar.component";

@Component({
  selector: 'app-find-page',
  imports: [SearchBarComponent],
  templateUrl: './find-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FindPageComponent { }
