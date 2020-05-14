import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';


interface User{
  email: any;
  password: any;
  firstName: any;
  lastName: any;
  phoneNumber: any;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor(public nav: NavController, public rauth:AngularFireAuth, public toastctrl: ToastController) { }

  ngOnInit() {
  }


  register(){
    const user = this.rauth.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password).then(()=>{
      this.nav.navigateRoot('');
        })
      }

      back(){
        this.nav.navigateBack('');
      }


     

}
