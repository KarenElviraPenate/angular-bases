import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroNames:string[] =['Wonderwomen','Thor','Ant-man','Wasp'];
    public heroLastDelete?:string|undefined;

    removeLastHero():void{
      this.heroLastDelete = this.heroNames.pop();
    }
}
