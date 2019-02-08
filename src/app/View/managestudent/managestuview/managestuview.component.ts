import { FormGroup, FormControl } from '@angular/forms';
import { Student } from './../../../dto/Student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../service/StudentService';

@Component({
  selector: 'app-managestuview',
  templateUrl: './managestuview.component.html',
  styleUrls: ['./managestuview.component.css']
})
export class ManagestuviewComponent implements OnInit {
  student: Array<Student> = [];
  selectedStudent: Student = new Student();
  tempUser: Student = null;
  manuallySelected = true;
  inputDisabled = true;
  count = 0;
  manually = false;
  st: Student = null;
  constructor(private studentService: StudentService) { }

  studentForm: FormGroup = new FormGroup({
    rid : new FormControl(''),
    fullname : new FormControl(''),
    Address : new FormControl(''),
    DOB : new FormControl(''),
    Grade : new FormControl(''),
    password : new FormControl('')
  });
  get rid () {
    return this.studentForm.get('rid');
  }
  get fullname () {
    return this.studentForm.get('fullname');
  }
  get Address () {
    return this.studentForm.get('Address');
  }
  get DOB () {
    return this.studentForm.get('DOB');
  }
  get Grade () {
    return this.studentForm.get('Grade');
  }
  get password () {
    return this.studentForm.get('password');
  }
  ngOnInit() {
  }
save(): void {
  this.selectedStudent.regId = this.rid.value;
  this.selectedStudent.name = this.fullname.value;
  this.selectedStudent.address = this.Address.value;
  this.selectedStudent.bday = this.DOB.value;
  this.selectedStudent.grade = this.Grade.value;
  this.selectedStudent.password = this.password.value;
  this.studentService.saveStudent(this.selectedStudent).subscribe(
    (result) => {
      if (!result) {
        alert('Customer has been saved successfully');
        this.manuallySelected = true;
      } else {
        alert('Failed to save the customer');

      }
    }
  );
}


}
