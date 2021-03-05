import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ResultDataService } from '../result-data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pools = ['A', 'B', 'C'];
  poolAData: any[] = [];
  poolBData: any[] = [];
  poolCData: any[] = [];
  notFound: boolean = false;
  studentForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pool: new FormControl('', [Validators.required]),
  });

  @Output() studentEmitter = new EventEmitter();

  constructor(private resultDataService: ResultDataService) {
    this.resultDataService.getPoolA().subscribe((data: any) => {
      this.poolAData = data;
    })
    this.resultDataService.getPoolB().subscribe((data: any) => {
      this.poolBData = data;
    })
    this.resultDataService.getPoolC().subscribe((data: any) => {
      this.poolCData = data;
    })

  }

  ngOnInit(): void {

  }

  submit(){
    var currentStudent = undefined;
    if(this.studentForm.controls.pool.value==='A'){
      currentStudent = this.poolAData.find((student: any) => {
        return this.studentForm.controls.email.value === student.email
      } )
    }
    else if(this.studentForm.controls.pool.value==='B'){
      currentStudent = this.poolBData.find((student: any) => {
        return this.studentForm.controls.email.value === student.email
      } )
    }
    else if(this.studentForm.controls.pool.value==='C'){
      currentStudent = this.poolCData.find((student: any) => {
        return this.studentForm.controls.email.value === student.email
      } )
    }
    console.log(currentStudent)
    this.notFound = currentStudent === undefined ? true : false;
    if(!this.notFound) {
      currentStudent = {
        ...currentStudent,
        pool: this.studentForm.controls.pool.value
      }
      this.studentEmitter.emit(currentStudent);
    }
  }


  }


