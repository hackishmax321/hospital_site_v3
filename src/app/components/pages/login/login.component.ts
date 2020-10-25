import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

// import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg_user:User = {
    uname: '',
    password: ''
  };

  

  constructor(public user_service:UserService) { }

  ngOnInit(): void {
    
    // this.user_service.getUsers().subscribe(users=>{
    //   console.log(users);
    // });
  }

  onLogin(){
    this.user_service.afs.collection('user', ref => ref.where('uname', '==', this.reg_user.uname)).snapshotChanges().subscribe(user=>{
      console.log(user);
    });
  }

}
