import { reminderclass } from './../remindersClass';
import { Component, OnInit,OnChanges,SimpleChange } from '@angular/core';
import {DataService} from './../services/data.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-remainder',
templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {
  public listOfReminders :reminderclass[];
  public errorMshg :string;

  constructor(private _dataService :DataService) {
    this.ngOnInit() 
  }
 

ngOnInit() {
    this._dataService.getPosts().subscribe((Reminderclass) =>{this.listOfReminders=Reminderclass});

  }
onClickDelete(inedxNumber){ //
  this.listOfReminders.splice(inedxNumber,1); //getting the index of the taste and delete it
 // this._dataService.deletevalue(inedxNumber);
  }
  onClickopenadd(RTitle:String ,RDue:String,RDate :Date){ //adding Reminder Func to the list 
    if(RTitle && RDue){
    this.listOfReminders.push(new reminderclass(RTitle,RDue,RDate)); //adding the array of Reminders a new 
    }else 
    console.log("cannot add empty tasks")

      }
}
