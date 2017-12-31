import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  // private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal','test goal']);
  // goal = this.goals.asObservable();

  constructor(private http:HttpClient) { }

  // changeGoal(goal) {
  //   this.goals.next(goal)
  // }
  getData() {
    return this.http.get('http://192.168.0.21/test/select.php');
}
createFood(food) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let body = JSON.stringify(food);
  return this.http.post('http://192.168.0.21/test/connect.php', body, options ).map((res: Response) => res.json());
}


}
