import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    username: string = "";
    password: string = "";
    cpassword: string = "";

    constructor(
        public afAuth: AngularFireAuth,
        public alert: AlertController,
        public router: Router
        ) { }

    ngOnInit() {
    }

    async register() {
        const { username, password, cpassword } = this;
        if (password !== cpassword) {
            this.showAlert('Error!', 'Passwords don\'t match');
            return;
        }

        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@yoobic.com', password);
            this.showAlert('Success!', 'Welcome aboard!');
            this.router.navigate(['/login']);
        } catch (err) {
            this.showAlert('Error!', err.message);
        }

    }

    login() {
        this.router.navigate(['/login']);
    }

    async showAlert(header: string, message: string) {
        const alert = await this.alert.create({
            header,
            message,
            buttons: ['Ok']
        });

        await alert.present();
    }

}
