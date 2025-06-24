import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-new-post-window',
  imports: [],
  templateUrl: './new-post-window.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostWindowComponent {


  closeWindow = output<boolean>();


closeEvent() {
  this.closeWindow.emit(false)

}



}
