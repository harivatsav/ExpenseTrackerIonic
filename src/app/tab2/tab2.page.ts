import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  
})
export class Tab2Page implements OnInit {

//   data:any=Tab1Page;
  
//  name = setInterval(() => { this.data.data.name1; }, 1000)

public data:any;
  split:any=[];
  
  constructor(public nav:NavController, public actionSheetController: ActionSheetController,public alertController: AlertController) {}
  ngOnInit(){
    // console.log(name);
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
            this.split.push(this.data);
            console.log(data.name1);
            console.log(data.name2);
            console.log(data.name3);
          }
        }
      ]
    }).then(data => data.present());
    
  }


remove(item){
  
this.split.pop(item);

}

Date(item){
  alert(item.name3);
}

}
