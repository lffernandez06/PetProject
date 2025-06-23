import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, output, signal } from '@angular/core';
import { CommentBoxComponent } from "../../../comment-box/comment-box/comment-box.component";

@Component({
  selector: 'app-icon-bar',
  imports: [CommonModule, CommentBoxComponent],
  templateUrl: './icon-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBarComponent {


  isFilled = false;
  commentBox = signal<boolean>(false);
  commentWindow = output<boolean>();

  showComments() {

    this.commentWindow.emit(true);

    }


}
