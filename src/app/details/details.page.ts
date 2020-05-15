import { Component, OnInit } from '@angular/core';
import { expenses, CashService } from '../cash.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  photo:any;
  expensesId : any;
  
  constructor(private cashService:CashService, 
    private route: ActivatedRoute,
    public nav:NavController,
    private camera: Camera) { }

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


      cam(){
        const options: CameraOptions = {
          quality: 100,
          sourceType:this.camera.PictureSourceType.CAMERA,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
         this.photo = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
         console.log(err);
        });  
      }

}
