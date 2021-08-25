import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message = "";

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        passWord: new FormControl('',[ Validators.required, Validators.minLength(6)]),
        confirmPassWord: new FormControl('',[ Validators.required, Validators.minLength(6)])
      }, this.checkPassWord),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    })
  }

  ngOnInit(): void {
  }

  checkPassWord(pwGroupControl: AbstractControl): any {
    const pwGroupValue = pwGroupControl.value;
    return pwGroupValue.passWord == pwGroupValue.confirmPassWord ? null : {invalidPassWord : true}
  }

  register() {
    this.message = "Bạn đã tạo tài khoản thành công";
  }
}
