import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
}
