import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-http.service';
import { tap } from 'rxjs/operators';
import { UserModel } from '../user.model';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../../../environments/environment'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  success:boolean = false;
  successMessage:string;
  error:string;
  loading:boolean = false;
  photo: boolean = false;
  photoLink = null;
  disableFile: boolean = false;
  photoURL = null;

//firebase ინიციალიზებები:
private firebase = initializeApp(environment.firebaseConfig);
private analytics = getAnalytics(this.firebase);
private storage = getStorage()



  onRegister() {
    this.loading = true;
    this.userService
      .registrate({
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const newUser = new UserModel(
            this.registrationForm.value.email,
            this.registrationForm.value.password,
            this.registrationForm.value.name,
            this.registrationForm.value.surname,
            this.registrationForm.value.sex,
            this.registrationForm.value.age,
            this.registrationForm.value.bday,
            this.photoURL,
            'offline',
            res
          );
          this.userService.saveRegistratedUser(newUser).subscribe();
          this.registrationForm.reset();
        })
      )
      .subscribe((res)=>{

        this.success = true;
        this.successMessage = 'წარმატებით გაიარეთ რეგისტრაცია!'
        this.loading = false;
      }, error => {
        switch(error.error.error.message){
          case 'EMAIL_EXISTS':
            this.error = 'იმეილი უკვე გამოყენებულია';
            break;
          case 'OPERATION_NOT_ALLOWED':
            this.error = 'დაუშვებელი ქმედება';
            break;
          default:
            this.error = error.error.error.message;
            break;
        }
        this.loading = false;
      });
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      sex: new FormControl('male', Validators.required),
      age: new FormControl(null, Validators.required),
      bday: new FormControl(null, Validators.required),
    });
  }

  //ფოტოს გამოჩენა
  appearPicture(event){

    let files = event.target.files
    let reader: FileReader = new FileReader()
    let result;
    reader.onload = function(){
      result = reader.result
    }
    this.disableFile = true;
    setTimeout(()=>{
      this.photoLink = result
      this.photo = true
    }, 1500)
    reader.readAsDataURL(files[0])
    uploadBytes(ref(this.storage, `pictures/${files[0].name}`), files[0]).then(snapshot => {
      getDownloadURL(ref(this.storage, `pictures/${files[0].name}`)).then(res => {
        this.photoURL = res;
      })
    })

  }
}
