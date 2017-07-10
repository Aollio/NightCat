import {ViewController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
    selector: 'com-popover',
    template: `
    <ion-list>
      <ion-list-header>{{ title }}</ion-list-header>
      <button ion-item *ngFor="let item of items" (click)="close()">{{item.name}}</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
    constructor(public viewCtrl: ViewController) {
    }

    close() {
        this.viewCtrl.dismiss();
    }
}