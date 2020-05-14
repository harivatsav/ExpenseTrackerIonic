import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController } from '@ionic/angular';
import { CashService, expenses } from '../cash.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  expenses: expenses[];

  data:any;
  

  constructor(public rauth: AngularFireAuth, 
    public nav: NavController, 
    private menu: MenuController,
    public cashService: CashService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) {}



ngOnInit(){

  this.cashService.getExpenses().subscribe(res =>{
    this.expenses = res;
  })
}

remove(item){
  this.cashService.removeExpenses(item.id); 
}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Split With?',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id:'name1-id',
          placeholder: 'Enter Name'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Amount'
        },
        {
        name: 'name3',
        type: 'date'
      },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'warning',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',

          handler: (data) => {
            this.data = data;
            console.log(data.name1);
            console.log(data.name2);
            console.log(data.name3);
          }
        }
      ]
    }).then(data => data.present())
    
  }


// async prompt(){
// await this.presentAlertPrompt().then((data)=>{
//   console.log(data);
// })
// }

}
  


