import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public characters:Character [] = [
    {id:uuid(),name:"Krillin",power:5000},
    {id:uuid(),name:"Goku",power:9500},
    {id:uuid(),name:"Vegeta",power:7500},
    {id:uuid(),name:"Androide 18",power:10000},
  ];

  onNewCharacter(character:Character):void{
    const newCharacter:Character = {id:uuid(),...character};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(characterUuid:number):void{
  //   this.characters.splice(characterUuid,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter (character => character.id != id);
  }
}
