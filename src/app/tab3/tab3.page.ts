import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Chart } from "chart.js";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  @ViewChild("doughnutCanvas", {static:false}) doughnutCanvas: ElementRef;
  @ViewChild("barCanvas", {static:false} ) barCanvas: ElementRef;
  @ViewChild("lineCanvas", {static:false}) lineCanvas: ElementRef;

  private doughnutChart: Chart;
  
  private lineChart: Chart;

  constructor(public rauth:AngularFireAuth, public nav: NavController) {}

ngOnInit(){

setTimeout(()=>{
  this.chart();
},2000);
}

  chart(){

this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }
});

this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        spanGaps: false
      }
    ]
  }
});
}

  logout(){
    this.rauth.auth.signOut().then(()=>{
      this.nav.navigateRoot('login');
    })
  }

}