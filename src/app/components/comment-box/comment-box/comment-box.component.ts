import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface UserComment {
  name?: string;
  comment?: string;
}

@Component({
  selector: 'app-comment-box',
  imports: [],
  templateUrl: './comment-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentBoxComponent {
  commentUser = signal<undefined | string>('');
  commentUserArray = signal<UserComment[]>([]);
  userName = signal('');

  constructor() {}

  addComment(comment: string) {
    this.commentUserArray.update((resp) => [
      ...resp,
      {
        name: this.userName(),
        comment: comment,
      },
    ]);

    console.log(this.commentUserArray(), 'dcsd');
  }

  sendComment() {
    if (this.userName() || !this.commentUser()) {
      return;
    }
    this.commentUserArray.update((resp) => [
      ...resp,
      {
        name: this.userName(),
        comment: this.commentUser(),
      },
    ]);
    this.resetFlieds();
  }

  resetFlieds() {
    this.commentUser.set('');
    this.userName.set('');
  }
}
