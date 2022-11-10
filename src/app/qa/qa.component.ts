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
     q:'I forgot my password. How do I obtain it?',
     a:'Enter your registered Emai Id and click on "Send Reset password".After clicking on it one link is send to your registered mail id. Click on the link and chnage the password.Try to Relogin.',
     category_name:'Category 1'},
     {
       id:2,
     q:'How many account can I have in this bank?',
     a:'You can have more than one account in the bank.',
     category_name:'Category 2'},
     {
       id:3,
     q:'If my account get Locked what should I do?',
     a:'If in case your account get locked you need to vist the nearest center of our bank to unlock your account.The account activation take 24-Hour to process the request.After request processing you can able to login.',
     category_name:'Category 1'},
     {
      id:4,
    q:'If my account get Locked what should I do?',
    a:'Apply in person ,at the bank : The Traditional or conventional method of opening a Bank Account is by visiting a bank branch.Through this method ,you can get assistance from the banks employees ,who are designated for this purpose.Once you have completed the application process at the bank, you may have to wait a few hours or days until your account is ready to use.',
    category_name:'Category 1'},
    {
      id:5,
    q:'What kind of Document required to open an account?',
    a:'If in case your account get locked you need to vist the nearest center of our bank to unlock your account.The account activation take 24-Hour to process the request.After request processing you can able to login.',
    category_name:'Category 1'},
    {
      id:6,
    q:'If my account get Locked what should I do?',
    a: 'Driving License, Password, Aadhar Card',
    category_name:'Category 1'},
    {
      id:7,
    q:'How to know more about Loan, EMI, FD, Mutual fund, Dmart account?',
    a:'We suggest you to visit our branch for more imformation or you can contact us by customer care number.',
    category_name:'Category 1'},
    {
      id:8,
    q:'Where can I find Customer care number?',
    a:'If you have any query related to bank please visit "contact us" page.There you can find our customer care number.It is Toll free number.',
    category_name:'Category 1'},
   ]; 
}
