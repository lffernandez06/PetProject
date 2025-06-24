
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { SearchBarComponent } from '../../../components/search-bar/search-bar/search-bar.component';
import { NavComponent } from '../../../components/nav-bar/nav/nav.component';
import { CommentBoxComponent } from "../../../components/comment-box/comment-box/comment-box.component";
import { AddBottomComponent } from "../../../components/add-bottom/add-bottom/add-bottom.component";
import { NewPostWindowComponent } from "../../../components/new-post-window/new-post-window/new-post-window.component";

@Component({
  selector: 'app-post-page',
  imports: [CardComponent, SearchBarComponent, CommentBoxComponent, AddBottomComponent, NewPostWindowComponent],
  templateUrl: './post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostPageComponent {


newPost = signal<boolean>(false);
showWindow = signal<boolean>(false);

setStatus(status: boolean) {
this.showWindow.set(status);
}

newPostWindow(event: boolean) {
 this.newPost.set(event);
}

closeWindow(event:boolean) {
 this.newPost.set(event)
}

}
