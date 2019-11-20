# ionic-app-yoobic

So this is a simple ionic app project
containing an entry and signup page,
a feed page showing some images and information and
the option to click on a card in the feed and
See some other details about this.
And it has a chat feature too.

In the project, I used these sites:
Stylized views based on: https://ionicframework.com/docs/api/
AngularFire: Used to provide and monitor user authentication status (https://firebase.google.com/);
Icons for: https://ionicframework.com/docs/v3/ionicons/
API for the feed: https://picsum.photos/v2/list

to run it just clone it, go to main folder and run "npm install"
after that just create the ionic server, i do it with: "ionic serve --lab"

I made a configuration in Firebase to provide the database if you want to change it
just go to https://firebase.google.com/ create a project and add a web app, go to the configuration and copy the entire configuration, something like:
const firebaseConfig = {
  apiKey:"AIzaSyBCK-zYwoOasdDSFASCHUTWCpAboUycbaKh72WZWLB4mK0",
  authDomain: "ionic-app-b5cd0.firebaseapp.com",
  databaseURL: "https://ionic-app-b5cd0.firebaseio.com",
  projectId: "ionic-app-b5cd0",
  storageBucket: "ionic-app-b5cd0.appspot.com",
  messagingSenderId: "593921189651",
  appId: "1: 593921189651:web:efef5a9ddfb5c29d6adce6"]
  measureId: "G-8KPL65BCV1"
};