import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

interface User{
  email?: any;
  password?: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {
    email: '',
    password: '',
  };
 
  constructor(public nav: NavController, public rauth:AngularFireAuth) { }

  ngOnInit() {
  }
    
  
  
    login(){
        const user = this.rauth.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password).then(()=>{
            this.nav.navigateForward('tabs');
          })      
    }

      register(){
        const user = this.rauth.auth.createUserWithEmailAndPassword(
          this.user.email,
          this.user.password
      )
            console.log("user");
      }
}
  
