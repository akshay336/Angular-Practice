import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Practice';

  list:any[] = [];

  SubmitTask(item:any){

    this.list.push({id:this.list.length, name:item});
    console.log(this.list);
  }

  removeItem(id:number){
    console.log(id);
    this.list = this.list.filter(item => item.id !==id);
    console.log(this.list);
    
  }
}
