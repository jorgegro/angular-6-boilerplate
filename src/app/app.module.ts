import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
