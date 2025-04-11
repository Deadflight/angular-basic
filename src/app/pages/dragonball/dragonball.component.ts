import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface DragonballCharacter {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  // imports: [NgClass],
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballPageComponent {
  characters = signal<DragonballCharacter[]>([
    { id: 1, name: 'Goku', powerLevel: 9000 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
    { id: 3, name: 'Gohan', powerLevel: 7000 },
    { id: 4, name: 'Piccolo', powerLevel: 6000 },
    { id: 5, name: 'Frieza', powerLevel: 10000 },
    { id: 6, name: 'Cell', powerLevel: 8000 },
    { id: 7, name: 'Majin Buu', powerLevel: 9500 },
    { id: 8, name: 'Yamcha', powerLevel: 500 },
  ]);

  newCharacter = signal<DragonballCharacter>({
    id: 0,
    name: '',
    powerLevel: 0,
  });

  minimumPowerLevelPermitted = 1000;

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
    const newId = this.characters().length + 1;
    const newCharacter = {
      ...this.newCharacter(),
      id: newId,
    };
    this.characters.update((prev) => [...prev, newCharacter]);
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
