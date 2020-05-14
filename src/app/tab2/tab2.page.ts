import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  
})
export class Tab2Page implements OnInit {

  data:any=Tab1Page;
  
 name = setInterval(() => { this.data.data.name1; }, 1000)
  

 

 
  
  
  constructor(public nav:NavController) {}
  ngOnInit(){
    console.log(name);
  }

}
