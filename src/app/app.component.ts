import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { apiResponse } from './heroi.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject2';
  todo:any = null;
  //data: any;
  users$: Observable<apiResponse> = new Observable();
  constructor(private http: HttpClient , private data: AppService){ }
  
 ngOnInit () {
    this.users$ = this.data.getUsers();
    console.log(this.users$);
  };

 getUsers = (): Observable<apiResponse> => {
      return this.http.get<apiResponse>("https://reqres.in/api/users");
        
    }
}


