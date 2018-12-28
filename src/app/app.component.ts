import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  applet: string[];
  category: any = [];

  lib = {
    categories: [
      'Performance', 'Investments', 'Operations'
    ],
    applets: [
      {
        name: 'Performance Snapshot',
        categories: ['Performance']
      },
      {
        name: 'Commitment Widget',
        categories: ['Investments']
      },
      {
        name: 'CMS',
        categories: ['Investments', 'Performance']
      }
    ]
  };

  constructor() {

    this.findcategory();

    let cate0 = this.lib.categories[0];
    this.applet = this.findapple(cate0);

  }

  findcategory() {

    let tag = this.lib.categories;

    for (var i = 0; i < tag.length; i++) {

      let x = tag[i];

      let app = this.findapple(x);

      let obj = new categ();

      obj.name = x;
      obj.num = app.length;

      this.category.push(obj);

    }


  }

  findapple(x: string) {

    let arr = new Array();

    let tag = this.lib.applets;

    for (var i = 0; i < tag.length; i++) {
      for (var j = 0; j < tag[i].categories.length; j++) {

        if (tag[i].categories[j] === x) arr.push(tag[i].name);

      }
    }

    return arr;

  }

  selected(x: string) {
    this.applet = this.findapple(x);
  }

}

class categ {
  name: string;
  num: number;
}