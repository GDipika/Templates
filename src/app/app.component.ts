import { Component } from '@angular/core';
import { items } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templates';
  items:items[]=[
    {id:1,name:'junnu'},
    {id:1,name:'junn1'},
    {id:1,name:'junn2'},
    {id:1,name:'junn3'},
  ]
  login=true;

  l='list1';
  l2='list2';
}
