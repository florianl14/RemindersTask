export class reminderclass {
private  Title :String;
private  Subject :String;
private Date :Date; 

constructor(Title:String,Subject :String,date:Date){
    this.Title=Title;
    this.Subject=Subject;
   this.Date=date;
}
get title(){
    return this.Title;
}
set title(value){
    this.Title=value;

}
get subject(){
    return this.Subject;
}
set subject(value){
    this.Subject=value;

}
get date(){
    return this.Date;
}
set date(value : Date){
    this.Date=value;
}
}