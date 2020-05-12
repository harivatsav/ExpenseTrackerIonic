import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';


interface User{
  email: any;
  password: any;
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
 
  constructor(public nav: NavController, public rauth:AngularFireAuth, public toastctrl: ToastController) { }



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
          this.user.password).then(()=>{
            this.nav.navigateRoot('login');
            })
          }


          
      

// async toast() {
//     const toast = await this.toastctrl.create({
//       message: 'err',
//       duration: 2000
//     });
//     toast.present();
//   }

  
// callingButtonSignIn(){
//   this.login()
//   this.toast()
// }


// callingButtonRegister(){
//   this.register()
//   this.toast()
// }

signUp(){
  this.nav.navigateRoot('sign-up');
}

}
  
