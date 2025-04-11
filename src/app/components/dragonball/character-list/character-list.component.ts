import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DragonballSuperCharacter } from '../../../interfaces/dragonball-super.character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<DragonballSuperCharacter[]>();
  listName = input.required<string>();
  minimumPowerLevelPermitted = 1000;
}
