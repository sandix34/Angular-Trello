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
  public switchItems($event: {
    src: {
      itemIndex: number,
      listIndex: number
    },
    dst: {
      itemIndex: number,
      listIndex: number
    }
  }): void {
    [
      this.lists[$event.src.listIndex].items[$event.src.itemIndex],
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex]
    ] = [
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex],
      this.lists[$event.src.listIndex].items[$event.src.itemIndex]
    ]
  }

  public transferItem($event: {
    src: {
      itemIndex: number,
      listIndex: number
    },
    dst: {
      listIndex: number
    }
  }): void {
    this.lists[$event.dst.listIndex].items.push(this.lists[$event.src.listIndex].items[$event.src.itemIndex]);
    this.lists[$event.src.listIndex].items.splice($event.src.itemIndex, 1);
  }
}
