import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  questions = [
    {
      id:1,
     q:'What is a question?',
     a:'A question is a type of sentence that is asking for an anwer. Questions end with the question mark symbol.',
     category_name:'Category 1'},
     {
       id:2,
     q:'What makes a good question?',
     a:'A good question is one where the answer is not clear or obvious.',
     category_name:'Category 2'},
     {
       id:3,
     q:'What is a rhetorical question?',
     a:'A rhetorical question is a type of question that answers the question.',
     category_name:'Category 1'}
   ];
   username : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
}
