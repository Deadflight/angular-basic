import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { DragonballSuperCharacter } from '../../../interfaces/dragonball-super.character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  newCharacter = signal<DragonballSuperCharacter>({
    id: 0,
    name: '',
    powerLevel: 0,
  });

  onAddNewCharacter = output<DragonballSuperCharacter>();

  onCharacterNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newCharacter.update((prev) => ({ ...prev, name: input.value }));
  }

  onCharacterPowerLevelChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newCharacter.update((prev) => ({
      ...prev,
      powerLevel: Number(input.value),
    }));
  }

  onAddCharacter() {
    const newCharacter = {
      ...this.newCharacter(),
      id: Math.floor(Math.random() * 1000),
    };

    this.onAddNewCharacter.emit(newCharacter);
    this.resetCharacter();
  }

  resetCharacter() {
    this.newCharacter.set({
      id: 0,
      name: '',
      powerLevel: 0,
    });
  }
}
