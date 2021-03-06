import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string = "";
    password: string = "";
    
    constructor(
        public afAuth: AngularFireAuth,
        public router: Router
        ) { }

    ngOnInit() {
    }

    async login() {
        const { username, password } = this;
        try {
            // kind of a hack, just for dev time;
            await this.afAuth.auth.signInWithEmailAndPassword(username + '@yoobic.com', password)
            this.router.navigate(['/list']);
        } catch (err) {
            console.dir(err);
            if (err.code === 'auth/user-not-found') {
                console.log('User not found');
            }
        }
    }

    signUp() {
        this.router.navigate(['/register']);
    }

}
