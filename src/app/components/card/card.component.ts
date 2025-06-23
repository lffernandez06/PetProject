import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommentBoxComponent } from "../comment-box/comment-box/comment-box.component";
import { IconBarComponent } from "./icons/icon-bar/icon-bar.component";

@Component({
  selector: 'app-card',
  imports: [ IconBarComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  showWindow = output<boolean>();

setStatus(status:boolean) {
  this.showWindow.emit(status);
}
}
