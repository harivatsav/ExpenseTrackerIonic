import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController } from '@ionic/angular';
import { CashService, expenses } from '../cash.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  expenses: expenses[];

  constructor(public rauth: AngularFireAuth, 
    public nav: NavController, 
    private menu: MenuController,
    public cashService: CashService) {}



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
  
}
