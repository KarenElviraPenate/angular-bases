import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    public name:string  = 'ironman';
    public age:number   = 45;

    get capitalizedName():string {
      return this.name.toUpperCase();
    }

    getHeroDescripcion():string{
      return `${ this.name} - ${ this.age}`;
    }

    changeHero():void{
      this.name = "Wonderwoman"
    }

    changeAge():void{
      this.age = 25;
    }

    resetForm():void{
      this.name = "ironman";
      this.age  =45;
    }
}
