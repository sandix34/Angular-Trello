import { Component } from '@angular/core';
import { List } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public listLabel = "";
  public lists: List[] = [{
    label: 'list1',
    items: [
      {
        content: 'item 1'
      },
      {
        content: 'item 2'
      },
      {
        content: 'item 3'
      },
      {
        content: 'item 4'
      },
      {
        content: 'item 5'
      }
    ]
  }];

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

  // inversion des items
  public switchItems($event: { srcIndex: number, dstIndex: number }) {
    const tmp = this.lists[0].items[$event.srcIndex];
    this.lists[0].items[$event.srcIndex] = this.lists[0].items[$event.dstIndex];
    this.lists[0].items[$event.dstIndex] = tmp;
  }
}
