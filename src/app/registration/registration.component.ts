import { Component, OnInit } from '@angular/core';
import { taskmodel } from './model/regmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './sheared/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent /*implements OnInit*/{
  // ngOnInit(): void {
  //   this.studentform=this.formbuilder.group({
  //     firstname:['',Validators.required],
  //     lastname:['',Validators.required],
  //     address:['',Validators.required],
  //     gender:['',Validators.required],
  //     dob:['',Validators.required],
  //     course:['',Validators.required],
  //     email:['',Validators.required]
  //   })
  //   this.getstudent();
  // }
  // addstudent(data:any){
  //   this.api.addstudent(data).subscribe((res=>{
  //     this.studentform.reset();
  //   }))
  //   this.getstudent();

  // }
  // getstudent(){
  //   // this.api.getstudent().subscribe(res=>{
  //   //   this.data=res;
  //   // })
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
