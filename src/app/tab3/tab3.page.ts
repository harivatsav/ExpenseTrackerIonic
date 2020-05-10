import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public rauth:AngularFireAuth, public nav: NavController) {}


  logout(){
    this.rauth.auth.signOut().then(()=>{
      this.nav.navigateRoot('login');
    })
  }

}

