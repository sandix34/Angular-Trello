import { Component } from '@angular/core';
import { List } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public listLabel = "";
  public lists: List[] = [];

  public itemContent = "";

  public addList() {
    if (this.listLabel) {
      this.lists.push({
        label: this.listLabel,
        items: []
      });
    }
    this.listLabel = "";
  }

  public addItem(list: List) {
    if (this.itemContent) {
      list.items.push({
        content: this.itemContent
      });
    }
    this.itemContent = "";
  }
}
