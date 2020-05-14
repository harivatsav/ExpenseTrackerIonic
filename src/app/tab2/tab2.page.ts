import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  // providers: [NavParams]
})
export class Tab2Page {

  constructor(public nav:NavController, public navParams: NavParams, private route: ActivatedRoute) {}

  // actiondata(){
  //   let d = this.navParams.get('data.name1');
  //   console.log(d);
  // }


  

}
