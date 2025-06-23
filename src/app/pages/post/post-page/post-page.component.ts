
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { SearchBarComponent } from '../../../components/search-bar/search-bar/search-bar.component';
import { NavComponent } from '../../../components/nav-bar/nav/nav.component';
import { CommentBoxComponent } from "../../../components/comment-box/comment-box/comment-box.component";

@Component({
  selector: 'app-post-page',
  imports: [CardComponent, SearchBarComponent, CommentBoxComponent],
  templateUrl: './post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostPageComponent {

showWindow = signal<boolean>(false);

setStatus(status: boolean) {
this.showWindow.set(status);
}
}
