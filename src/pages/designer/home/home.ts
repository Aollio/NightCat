import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class DesignerHomePage {

  types:Array<{name,value}> = [
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
      {name:'精选',value:'null'},
  ]

  constructor(public navCtrl: NavController) {

  }

}
