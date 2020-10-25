import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserCollection:AngularFirestoreCollection<User>;
  User:Observable<User[]>;

  constructor(public afs: AngularFirestore) { 
    // this.User = this.afs.collection('sample').valueChanges();

    this.UserCollection = this.afs.collection('user');

    // this.User = this.afs.collection('user').snapshotChanges().map(changes=>{
    //   return changes.map(a=>{
    //     const data = a.payload.doc.data() as User;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  getUsers(){
    return this.User;
  }

  addUser(user:User){
    this.UserCollection.add(user);
  }
}
