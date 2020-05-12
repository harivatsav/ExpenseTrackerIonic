import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 

export interface expenses {
  expense: any;
  dollars: any;
  dated: any;
}


@Injectable({
  providedIn: 'root'
})
export class CashService {

  private expenseCollection: AngularFirestoreCollection<expenses>;
  private expenses: Observable<expenses[]>;

  constructor(database: AngularFirestore) { 

    this.expenseCollection = database.collection<expenses>('EXPENSES');
    this.expenses = this.expenseCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id, ...data};
        });
      })
    );
}

  getExpenses(){
    return this.expenses;
  }

  getExp(id){
    return this.expenseCollection.doc<expenses>(id).valueChanges();
  }

  updateExpenses(expenses: expenses, id:any){
      return this.expenseCollection.doc(id).update(expenses);
    }

  addExpenses(expenses: expenses){
    return this.expenseCollection.add(expenses);
  }

  removeExpenses(id){
    return this.expenseCollection.doc(id).delete();
  }
}
