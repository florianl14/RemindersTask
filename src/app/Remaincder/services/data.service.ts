import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';
import { reminderclass } from './../remindersClass';
@Injectable()
export class DataService {
  private url =("./../../../assets/ReminderData.json");
  constructor(public http: Http) { 
  }
  getPosts(){  //Geting the data from the json file 
    return this.http.get(this.url)
    .map((res => res.json()));
  }
  deletevalue(index:Number)
  {
    this.http.delete(this.url+"/"+index); //delete the selected id of the task
  }
  Addingvalue(value:String){//Adding a new data to the Json file  
    this.http.post(this.url,value);

  }
}
