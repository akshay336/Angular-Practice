import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'Angular_Practice';

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
  });

  submitForm() {
    console.log(this.loginForm.value); // Corrected: Extract values
  }

  get values(){
    return this.loginForm.get('name');
  }

  get pass(){
    return this.loginForm.get('password');
  }
}
