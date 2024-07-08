import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import type { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  /*@Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }*/
  user = input.required<User>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  selected = input.required<boolean>();
  // @Output() select = new EventEmitter();
  select = output<User>();

  onSelectUser() {
    this.select.emit(this.user());
  }
}
