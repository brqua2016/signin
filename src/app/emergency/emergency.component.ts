import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-emergency',
  // templateUrl: './emergency.component.html',
  template: `
  
  <h1>Angular 5 HttpClient Demo App</h1>
  <h2>Foods</h2>
  <ul>
    <li *ngFor="let datas of data">{{datas.firstname}} {{datas.lastname}}</li>
  </ul>
  `,
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  data: Object;
  getData: any;
  goals = [];
  test: JSON = 
  {
    
      "id":"6",
      "firstname":"Jack",
      "lastname":"Doe",
  }

 

  constructor(private _data: DataService) { }

  ngOnInit() {
    // this.itemCount = this.goals.length;
    // this._data.goal.subscribe(res => this.goals = res);
    // this._data.changeGoal(this.goals);
    this.getData();
  }

    getData() {
       this._data.getData().subscribe(
          data => { this.data = data},
          err => console.error(err),
          () => console.log('done loading foods')
        );
      }
      createFood(name) {
        let food = {name: name};
        this._data.createFood(food).subscribe(
           data => {
             // refresh the list
             this.getFoods();
             return true;
           },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }

  }



