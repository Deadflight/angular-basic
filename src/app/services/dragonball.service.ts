import { effect, Injectable, signal } from '@angular/core';
import { DragonballSuperCharacter } from '../interfaces/dragonball-super.character.interface';

const loadFromLocalStorage = (): DragonballSuperCharacter[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  constructor() {}

  characters = signal<DragonballSuperCharacter[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log('Saving to local storage', this.characters().length);
    const characters = this.characters();
    localStorage.setItem('characters', JSON.stringify(characters));
  });

  onAddNewCharacter = (newCharacter: DragonballSuperCharacter) => {
    this.characters.update((prev) => [...prev, newCharacter]);
  };
}
