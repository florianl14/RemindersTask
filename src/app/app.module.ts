
import { DataService } from './Remaincder/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RemainderComponent } from './Remaincder/remainder/remainder.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    RemainderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
  
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
