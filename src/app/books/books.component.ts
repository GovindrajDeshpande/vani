import { Component } from '@angular/core';
import { bookmodel } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name!:string;
  bc!:number;
  authorname!:string;
  emailid!:string;


  data : bookmodel[]=[{
    bookname:'Harry Potter and the Sorcerers Stone',
    bookcode:123,
    author:'By J.K. Rowling',
    email:'abc@gmail.com'
  }]

  onAdd(){
    const obj={
      bookname:this.name,
      bookcode:this.bc,
      author:this.authorname,
      email:this.emailid
    }
    this.data.push(obj);
  }

}
