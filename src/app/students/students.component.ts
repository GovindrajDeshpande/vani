import { Component } from '@angular/core';
import { taskmodel } from '../registration/model/regmodel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  // tasks:taskmodel[] = [{
  //   firstname:'Harry',
  //   lastname:'Hustan',
  //   address:'USA',
  //   gender:'Male',
  //   dob:'02-05-2002',
  //   course:'ISE',
  //   email:'xym@gmail.com'
  // }]

  // onDelete(id:number){
  //   this.tasks=this.tasks.filter((item, idx)=>idx != id);
  // }
  fname!:string;
  lname!:string;
  add!:string;
  gen!:string;
  dateofbirth!:string;
  coursetaken!:string;
  emailgiven!:string;

  tasks:taskmodel[] = [{
    firstname:'Harry',
    lastname:'Hustan',
    address:'USA',
    gender:'Male',
    dob:'02-05-2002',
    course:'ISE',
    email:'xym@gmail.com'
  }]

  // studentform!:FormGroup;
  // data!:taskmodel[];
  // constructor(private formbuilder:FormBuilder,private api:ApiService){ }

  

  onAdd(){
    const newObj={
      firstname:this.fname,
      lastname:this.lname,
      address:this.add,
      gender:this.gen,
      dob:this.dateofbirth,
      course:this.coursetaken,
      email:this.emailgiven
    }
    this.tasks.push(newObj);
  }

  onDelete(id:number){
    this.tasks=this.tasks.filter((item, idx)=>idx != id);
  }

  // update(){
    
  // }
}



