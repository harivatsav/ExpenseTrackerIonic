import { Component, OnInit } from '@angular/core';
import { expenses, CashService } from '../cash.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  expenses:expenses = {
    expense: '',
    dollars: '',
    dated:new Date().getDate()
}

  expensesId : any;
  
  constructor(private cashService:CashService, 
    private route: ActivatedRoute,
    public nav:NavController) { }

  ngOnInit() {
  
      this.expensesId = this.route.snapshot.params['id'];
      if(this.expensesId){
        this.loadexpenses();
      }
    }

      loadexpenses(){
        this.cashService.getExp(this.expensesId).subscribe(res => {
        this.expenses = res;
        });
      }

      saveExpenses(){
        if(this.expensesId){
          this.cashService.updateExpenses(this.expenses, this.expensesId).then(() =>{
            this.nav.navigateBack('tabs');
          })
        
        } else{
          this.cashService.addExpenses(this.expenses).then(() =>{
            this.nav.navigateBack('tabs');
          })
        }
      }

}
