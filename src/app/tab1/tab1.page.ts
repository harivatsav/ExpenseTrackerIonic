import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public rauth: AngularFireAuth, public nav: NavController, private menu: MenuController) {}


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  


}
