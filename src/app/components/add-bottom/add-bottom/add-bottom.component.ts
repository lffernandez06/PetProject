import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-add-bottom',
  imports: [],
  templateUrl: './add-bottom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBottomComponent {

 newPostSwitch = output<boolean>();


  newPost() {
 this.newPostSwitch.emit(true)

}
}
